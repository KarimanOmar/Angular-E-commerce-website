import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { Route, RouterModule, Routes } from '@angular/router';

// const routes:Routes=[
//   {path: 'Cart',component: OrdersInCartComponent,title:'Cart Page'},
//   {path: 'Wishlist',component: OrdersInWishlistComponent,title:'Wishlist Page'},
// ]

const routes:Routes=[
  { path: 'cart', component:CartComponent,title:'Cart Page' },
  { path: 'Wishlist', component:WishlistComponent,title:'Wishlist Page' },

]

@NgModule({
  declarations: [
    WishlistComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WishlistModule { }
