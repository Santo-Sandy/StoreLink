import { Routes } from '@angular/router';
import { Home } from './starts/home/home';
import { About } from './Pages/settings/about/about';
import { Settings } from './Pages/settings/settings';
import { Stores } from './Pages/stores/stores';
import { Suppliers } from './Pages/suppliers/suppliers';
import { Hubs } from './Pages/hubs/hubs';
import { Depos } from './Pages/depos/depos';
import { Progress } from './Pages/progress/progress';
import { Supplier } from './Pages/suppliers/supplier/supplier';
import { Dashboard } from './Pages/dashboard/dashboard';
import { LoginRegister } from './starts/login-register/login-register';

export const routes: Routes = [
    {
        path:'',
        component: Home,
        title:'Home',
    },
    {
        path:'dashboard',
        component:Dashboard,
        title:'Dashboard',
    },
    {
        path:'login-register/:id',
        component:LoginRegister,
        title:'Login/Register',
    },
    {
        path:'about',
        component: About,
        title:'About',
    },
    {
        path:'supplier/:id',
        component: Supplier,
        title:'Supplier',
    }
    ,
    {
        path:'routes',
        loadComponent:()=>import ('./Pages/routes/routes').then(m=>m.Routes),
        title:'Routes',
    },
    {
        path:'settings',
        component: Settings,
        title:'Settings',
    },
    {
        path:'stores',
        component:Stores,
        title:'Stores',
    },
    {
        path:'suppliers',
        component:Suppliers,
        title:'Suppliers',
    },
    {
        path:'hubs',
        component:Hubs,
        title:'Hubs',
    },
    {
        path:'depos',
        component:Depos,
        title:'Depos',
    },
    {
        path:'progress',
        component:Progress,
        title:'Progress',
    },
    {
        path:'trackproduct/:id',
        loadComponent:()=>import('./Pages/progress/trackproduct/trackproduct').then(m=>m.Trackproduct),
        title:'Progress-track',
    },
    {
        path:'store-details/:id',
        loadComponent:()=>import('./Pages/stores/store-details/store-details').then(m=>m.StoreDetails),
        title:'Store'
    }
];
