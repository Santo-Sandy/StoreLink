import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Settings } from './settings/settings';

export const routes: Routes = [
    {
        path:'',
        component: Home,
    },
    {
        path:'home',
        component: Home,
        title:'Home',
    },
    {
        path:'about',
        component: About,
        title:'About',
    },
    {
        path:'settings',
        component: Settings,
        title:'Settings',
    },
    {
        path:'stores',
        loadComponent:()=>import('./stores/stores').then(m=>m.Stores),
        title:'Stores',
    },
    {
        path:'suppliers',
        loadComponent:()=>import('./suppliers/suppliers').then(m=>m.Suppliers),
        title:'Suppliers',
    },
    {
        path:'hubs',
        loadComponent:()=>import('./hubs/hubs').then(m=>m.Hubs),
        title:'Hubs',
    },
    {
        path:'depos',
        loadComponent:()=>import('./depos/depos').then(m=>m.Depos),
        title:'Depos',
    },
    {
        path:'progress',
        loadComponent:()=>import('./progress/progress').then(m=>m.Progress),
        title:'Progress',
        children:[
            {path:"trackproduct",
                loadComponent:()=>import('./progress/trackproduct/trackproduct').then(m=>m.Trackproduct),
            }
        ]
    },
    {
        path:'**',
        redirectTo:'home',
    }
];
