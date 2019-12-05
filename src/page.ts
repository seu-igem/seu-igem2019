import App from './App';

import { Home } from './pages/Home';
import { Description } from './pages/Description';
import { Protocols } from './pages/Protocols';
import { HumanPractices } from './pages/HumanPractices';
import { PublicEngagement } from './pages/PublicEngagement';
import { Page404 } from './pages/Page404';
import { Attributions } from './pages/Attributions';
import { Safety } from './pages/Safety';
import { Design } from './pages/Design';
import { Product_Design } from './pages/Product_Design';
import { Entrepreneurship } from './pages/Entrepreneurship';
import { Experiments } from './pages/Experiments';
import { Results } from './pages/Results';
import { Parts } from './pages/Parts';
import { Model } from './pages/Model';
import { Demonstrate } from './pages/Demonstrate';
import { Collaborations } from './pages/Collaborations';
import { Criteria } from './pages/Criteria';
import { Notebook } from './pages/Notebook';
import { Member } from './pages/Member';

export function queryPage(path: string): Page {
   const page404 = Page404;
   const routes: { [_: string]: Page | null | undefined } = {
      '/': Home,

      '/Description': Description,
      '/Design': Design,
      '/Demonstrate': Demonstrate,

      '/Experiments': Experiments,
      '/Results': Results,
      '/Parts': Parts,
      '/Model': Model,
      '/Protocols': Protocols,
      '/Notebook': Notebook,
      '/Safety': Safety,

      '/Product_Design': Product_Design,
      '/Entrepreneurship': Entrepreneurship,

      '/Human_Practices': HumanPractices,
      '/Public_Engagement': PublicEngagement,

      '/Member': Member,
      '/Attributions': Attributions,
      '/Collaborations': Collaborations,

      '/Criteria': Criteria,
   };
   return routes[path] || page404;
}

export interface Page {
   App?: App;
   init(options: { App: App }): void;
   enter(): void;
   exit(): void;
}

