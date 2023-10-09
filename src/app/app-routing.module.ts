// 2.	Add a """route""" ‘products/:id’ that takes and id and display the given product details:
// a.	Add the route in the router module routes.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Component/main/main.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ProductsParentComponent } from './Component/products-parent/products-parent.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { AdminComponent } from './Component/admin/admin.component';
import { SignUpUserComponent } from './Component/sign-up-user/sign-up-user.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Home page" },//default path
  { path: 'Home', component: HomeComponent, title: "Home page" },
  { path: 'Products', component: ProductsParentComponent, title: "Products page" , canActivate: [userGuard],},
  { path: 'About-us', component: AboutComponent, title: "About us page" , canActivate: [userGuard],},
  { path: 'ProductDetails/:productID', component: ProductDetailsComponent, title: "Product Details page" },
  { path: 'Contact-us', component: ContactComponent, title: "Contact us page" },
  { path: 'Admin/:productID', component: AdminComponent, title: "Admin page", canActivate: [userGuard],},
  { path: 'Admin', component: AdminComponent, title: "Admin page" , canActivate: [userGuard],},
  { path: 'signUp', component: SignUpUserComponent, title: "signUp page" },
  { path: 'logIn', component: LogInComponent, title: "logIn page" },
  {
    path: 'cart',
    loadChildren: () => import('src/app/Component/wishlist/wishlist.module').then(m => m.WishlistModule)
    , canActivate: [userGuard]},
  { path: '**', component: NotFoundComponent, title: "Not found" },//wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
