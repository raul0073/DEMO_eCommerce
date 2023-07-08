import { CategoriesComponent } from './pages/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailedComponent } from './pages/product-detailed/product-detailed.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailedComponent
  },  
  {
    path: 'cart',
    component: CartComponent
  }, 
  {
    path: 'Categories',
    component: CategoriesComponent
  },
  {
    path: 'Categories/:category',
    component: CategoriesComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
