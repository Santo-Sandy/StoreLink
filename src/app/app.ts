import { ApplicationConfig, Component, mergeApplicationConfig, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';

const appconfig:ApplicationConfig={
  providers:[
    provideServerRendering(withRoutes(serverRoutes)),
  ]
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sample');

  

}
