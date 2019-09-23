import { Page } from '../page';
import App from '../App';

class InitialPageClass implements Page {
   public App?: App;

   public init(options: { App: App }) {
      this.App = options.App;
   }

   public enter() {
      if (this.App!.currPage !== this) return;

      this.App!.setState({
         BeforeHeader: false,
         BeforeHeaderProps: {},
         Body: false,
         BodyProps: {},
         showLoading: true,
         showFooter: false,
      }, () => {
         if (this.App!.nextPage !== null) {
            this.exit();
         }
      });
   }

   public exit() {
      if (this.App!.currPage !== this) return;
      if (this.App!.nextPage === null) return;
      this.App!.currPage = this.App!.nextPage;
      this.App!.nextPage = null;
      this.App!.currPage.enter();
   }
}

export const InitialPage = new InitialPageClass();
