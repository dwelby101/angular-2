import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About',
    resolve: {
      'yourData': DataResolver
    }
  },
  { path: 'commissions', component: 'Commissions',
    resolve: {
      'yourData': DataResolver
    }
  },
  // async components with children routes must use WebpackAsyncRoute
  { path: 'gallery', component: 'Gallery',
    canActivate: [ WebpackAsyncRoute ],
    children: [
      { path: '', component: 'Index' }  // must be included
    ]
  },
  { path: 'faq', component: 'Faq',
    resolve: {
      'yourData': DataResolver
    }
  },
  { path: 'store', component: 'Store',
    resolve: {
      'yourData': DataResolver
    }
  },
  { path: '**',    component: NoContent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'About': require('es6-promise-loader!./about'),
  'Commissions': require('es6-promise-loader!./commissions'),
  'Gallery': require('es6-promise-loader!./gallery'),
  'Faq': require('es6-promise-loader!./faq'),
  'Store': require('es6-promise-loader!./store'),
  'Index': require('es6-promise-loader!./gallery'), // must be exported with gallery/index.ts
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Commissions'],
  asyncRoutes['Gallery'],
  asyncRoutes['Faq'],
  asyncRoutes['Store'],
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
