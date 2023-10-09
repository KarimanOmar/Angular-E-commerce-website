import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategory } from 'src/app/Models/icategory';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  Discount: DiscountOffers = DiscountOffers.NoDiscount //Bonus
  store: Store = new Store("zara", 'assets/images.png', ["cairo", "sohage"])
  Motors: ICategory = {
    id: 1,
    Name: "Motors"
  }
}
