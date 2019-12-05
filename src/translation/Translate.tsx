import React from 'react';
import { context } from '../context';
import { translation } from '.';

interface NodeArray extends Array<Node> { }
type Node = string | undefined | NodeElement | NodeArray;
interface NodeElement {
   children: Node;
}

export function stringify(nd: Node): string {
   if (typeof nd === 'undefined') return '';
   if (typeof nd === 'string') return nd;

   if (Array.isArray(nd)) return nd.map(node => stringify(node)).join('');

   return '<b>' + stringify(nd.children) + '</b>';
}

const parser = new DOMParser();
function parse(text: string): Node {
   const node = parser.parseFromString(text, 'text/html').body.childNodes[0];
   return parseDOMNode(node);
}
function parseDOMNode(node: ChildNode): Node {
   if (node.nodeType === 3) return node.nodeValue!;

   if (node.childNodes.length === 0) return { children: void 0 };
   if (node.childNodes.length === 1) return { children: parseDOMNode(node.childNodes[0]) };

   const children: Node[] = [];
   node.childNodes.forEach(n => children.push(parseDOMNode(n)));
   return { children };
}

// const tree: Node = {
//    children: [
//       'How are you',
//       {
//          children: void 0,
//       },
//       'Hello World',
//    ],
// };
// console.log(stringify(tree));
// console.log(parse(stringify(tree)));

function transformReactNodeIntoNode(node: React.ReactNode): Node {
   if (typeof node === 'string') return node;
   if (typeof node === 'number') return node + '';
   if (typeof node === 'undefined') return node;
   if (node === null) return void 0;
   if (Array.isArray(node)) return node.map(n => transformReactNodeIntoNode(n));
   if (typeof node === 'boolean') throw new Error();

   return {
      children: transformReactNodeIntoNode((node as React.ReactElement).props.children),
   };
}

interface ITranslateProps {
   TRkey: string;
}

interface ITranslateState {
   currentLang: string;
   targetLang: null | string;
   tree: Node;
}

export default class Translate extends React.PureComponent<ITranslateProps, ITranslateState> {
   public initialState: ITranslateState;
   public originalNode: Node;
   public originalText: string;

   constructor(props: ITranslateProps) {
      super(props);
      this.originalNode = transformReactNodeIntoNode(this.props.children);
      this.originalText = stringify(this.originalNode);

      this.initialState = {
         currentLang: 'en',
         targetLang: null,
         tree: this.originalNode,
      };
      this.state = Object.assign({}, this.initialState);
   }

   public onTranslation = (
      { lang, enableTranslate }: { lang: string; enableTranslate: boolean; }
   ) => {
      if (!enableTranslate) {
         this.setState(this.initialState);
         return;
      }
      if (this.state.currentLang === lang) {
         this.setState({
            targetLang: null,
         });
         return;
      }

      if (this.state.targetLang !== lang) {
         this.setState({
            targetLang: lang,
         });
         translation.getTranslation(
            this.props.TRkey,
            this.originalText,
            lang
         ).then(result => this.onTranslationDone({
            success: true,
            result,
            lang,
         })).catch(() => this.onTranslationDone({
            success: false,
            lang,
         }));
      }
   }

   private onTranslationDone(o: { success: boolean; result?: string; lang: string; }) {
      if (!o.success) {
         if (this.state.targetLang === o.lang) {
            this.setState(this.initialState);
         }
         return;
      }

      const resultNode = parse(o.result!);

      this.setState({
         currentLang: o.lang,
         targetLang: null,
         tree: resultNode,
      });
   }

   public componentDidMount() {
      context.on('translation', this.onTranslation);
      if (context.translation.enableTranslate) {
         this.onTranslation(context.translation);
      }
   }
   public componentWillUnmount() {
      context.removeListener('translation', this.onTranslation);
   }

   public render() {
      try {
         return fillChildrenWithContent(this.props.children, this.state.tree, this.originalNode);
      } catch (e) {
         return this.props.children;
      }
   }
}

function fillChildrenWithContent(
   reactTree: React.ReactNode,
   tree: Node,
   originalTree: Node
): React.ReactNode {
   if (typeof reactTree === 'string') return tree as string;
   if (typeof reactTree === 'number') return (tree as string) + '';
   if (typeof reactTree === 'undefined') return void 0;
   if (reactTree === null) return void 0;

   if (Array.isArray(reactTree)) {
      const result: React.ReactNodeArray = [];
      let i = 0; let j = 0;
      while (j < (originalTree as NodeArray).length) {
         const node = (tree as NodeArray)[i];
         let originalNode = (originalTree as NodeArray)[j];
         while (typeof node !== typeof originalNode) {
            j++;
            originalNode = (originalTree as NodeArray)[j];
         }
         result.push(fillChildrenWithContent(
            reactTree[j],
            node,
            originalNode
         ));
         i++; j++;
      }

      return result;
   }

   const children = fillChildrenWithContent(
      (reactTree as React.ReactElement).props.children,
      (tree as NodeElement).children,
      (originalTree as NodeElement).children
   );
   const props: any = Object.assign({}, (reactTree as React.ReactElement).props);
   if (typeof (reactTree as React.ReactElement).type !== 'string'
      && typeof children === 'string') {
      props.originalText = reactTree as string;
   }
   return Array.isArray(children)
      ? React.cloneElement(
         (reactTree as React.ReactElement),
         props,
         ...children)
      : React.cloneElement(
         (reactTree as React.ReactElement),
         props,
         children);
}
