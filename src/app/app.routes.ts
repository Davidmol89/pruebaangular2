import { Routes } from '@angular/router';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '', loadComponent:() => import('./domains/products/pages/list/list.component')
            },
            {
                path: 'abaut', loadComponent:() => import('./domains/info/pages/about/about.component')
            },
            {
                path: 'product/:id', loadComponent:() => import('./domains/products/pages/product-detail/product-detail.component')
            }
        ]
    },
    {
        path: '**', component: NotFoundComponent
    }
];
