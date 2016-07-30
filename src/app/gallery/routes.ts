import { Gallery } from './gallery.component';
import { Index } from './index.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'gallery', component: Gallery,
  children: [
    { path: '', component: Index }
  ]
};
