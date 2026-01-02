import { RenderMode, ServerRoute } from '@angular/ssr';
import { Trackproduct } from './Pages/progress/trackproduct/trackproduct';


export const serverRoutes: ServerRoute[] = [
  {
    
    path:'trackproduct/:id',
    renderMode:RenderMode.Client,
  },
  {
    
    path:'store-details/:id',
    renderMode:RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
