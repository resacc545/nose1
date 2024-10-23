import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'Producto',
        component: ProductoComponent,
        title: 'Prod'
    },
    {
        path: 'Cliente',
        component: ClienteComponent,
        title: 'Cliente'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
    
];
