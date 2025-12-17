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
        title:'Home Page',
    },
    {
        path:'about',
        component: About,
        title:'About Page',
    },
    {
        path:'settings',
        component: Settings,
        title:'Settings Page',
    },
    {
        path:'stores',
        loadComponent:()=>import('./stores/stores').then(m=>m.Stores),
        title:'Stores Page',
    },
    {
        path:'suppliers',
        loadComponent:()=>import('./suppliers/suppliers').then(m=>m.Suppliers),
        title:'Suppliers Page',
    },
    {
        path:'hubs',
        loadComponent:()=>import('./hubs/hubs').then(m=>m.Hubs),
        title:'Hubs Page',
    },
    {
        path:'depos',
        loadComponent:()=>import('./depos/depos').then(m=>m.Depos),
        title:'Depos Page',
    },
    {
        path:'progress',
        loadComponent:()=>import('./progress/progress').then(m=>m.Progress),
        title:'Progress Page',
    },
    {
        path:'**',
        redirectTo:'home',
    }
];
