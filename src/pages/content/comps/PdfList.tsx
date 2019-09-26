import React from 'react';

import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { mergeStyleSets } from '@uifabric/styling';

import { assets } from '../../../assets-path.json';

import './css/PdfList.scss';

interface IPdfListProps {
   items: Array<{
      name: string;
      author: string;
      size: number;
   }>;
}
interface IPdfListState {
   items: IDocument[];
   columns: IColumn[];
}

interface IDocument {
   key: string;
   name: string;
   value: string;
   iconURL: string;
   fileType: string;
   author: string;
   fileSize: string;
   fileSizeRaw: number;
}

const classNames = mergeStyleSets({
   fileIconHeaderIcon: {
      padding: 0,
      fontSize: '16px',
   },
   fileIconCell: {
      textAlign: 'center',
      selectors: {
         '&:before': {
            content: '.',
            display: 'inline-block',
            verticalAlign: 'middle',
            height: '100%',
            width: '0px',
            visibility: 'hidden',
         },
      },
   },
   fileIconImg: {
      verticalAlign: 'middle',
      maxHeight: '16px',
      maxWidth: '16px',
   },
});

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
   const key = columnKey as keyof T;
   return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

export default class PdfList extends React.Component<IPdfListProps, IPdfListState> {
   private onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
      const { columns, items } = this.state;
      const newColumns: IColumn[] = columns.slice();
      const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
      newColumns.forEach((newCol: IColumn) => {
         if (newCol === currColumn) {
            currColumn.isSortedDescending = !currColumn.isSortedDescending;
            currColumn.isSorted = true;
         } else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
         }
      });
      const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
      this.setState({
         columns: newColumns,
         items: newItems,
      });
   }
   private onItemInvoked = (item: any) => {
   }
   private onChangeText = (ev?: React.ChangeEvent<HTMLInputElement>, text?: string): void => {
      this.setState({
         items: text ? this.allItems.filter(i => i.name.toLowerCase().indexOf(text.toLowerCase()) > -1) : this.allItems,
      });
   }

   private allItems = this.props.items.map((item, i) => ({
      key: i + '',
      name: item.name,
      value: item.name,
      iconURL: assets.icons.pdf$png,
      fileType: 'pdf',
      author: item.author,
      fileSize: item.size >= 1000 ? (item.size / 1024).toFixed(1) + ' MB' : item.size + ' KB',
      fileSizeRaw: item.size,
   }));
   public state = {
      items: this.allItems,
      columns: [
         {
            key: 'column1',
            name: 'File Type',
            className: classNames.fileIconCell,
            iconClassName: classNames.fileIconHeaderIcon,
            ariaLabel: 'Column operations for File type, Press to sort on File type',
            iconName: 'Page',
            isIconOnly: true,
            fieldName: 'name',
            minWidth: 16,
            maxWidth: 16,
            onColumnClick: this.onColumnClick,
            onRender: (item: IDocument) => {
               return <img src={item.iconURL} className={classNames.fileIconImg} alt={item.fileType + ' file icon'} />;
            },
         },
         {
            key: 'column2',
            name: 'Name',
            fieldName: 'name',
            minWidth: 100,
            maxWidth: 1000,
            isRowHeader: true,
            isResizable: true,
            isSorted: true,
            isSortedDescending: false,
            sortAscendingAriaLabel: 'Sorted A to Z',
            sortDescendingAriaLabel: 'Sorted Z to A',
            onColumnClick: this.onColumnClick,
            data: 'string',
            isPadded: true,
         },
         {
            key: 'column3',
            name: 'Author',
            fieldName: 'author',
            minWidth: 70,
            maxWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onColumnClick: this.onColumnClick,
            onRender: (item: IDocument) => {
               return <span>{item.author}</span>;
            },
            isPadded: true,
         },
         {
            key: 'column4',
            name: 'File Size',
            fieldName: 'fileSizeRaw',
            minWidth: 70,
            maxWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onColumnClick: this.onColumnClick,
            onRender: (item: IDocument) => {
               return <span>{item.fileSize}</span>;
            },
         },
      ],
   };

   public render() {
      return (
         <div className='pdf-list'>
            <div className='pdf-list-beforelist'>
               <ActionButton iconProps={{ iconName: 'Download' }}>
                  Download ZIP
               </ActionButton>
               <SearchBox
                  placeholder='Filter by name'
                  iconProps={{ iconName: 'Filter' }}
                  underlined={true}
                  onChange={this.onChangeText}
               />
            </div>
            <div className='pdf-list-filelist-container'>
               <DetailsList
                  items={this.state.items}
                  columns={this.state.columns}
                  selectionMode={0}
                  getKey={(item: any, index?: number) => item.key}
                  setKey='none'
                  layoutMode={DetailsListLayoutMode.justified}
                  isHeaderVisible={true}
                  onItemInvoked={this.onItemInvoked}
               />
            </div>
         </div>
      );
   }
}

