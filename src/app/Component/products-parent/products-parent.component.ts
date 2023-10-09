import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';
import { MainComponent } from '../main/main.component';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss'],
})
export class ProductsParentComponent {
  public prodacdeListService: ProductsServiceService =
    new ProductsServiceService();
  store: Store = new Store('JUMIA', 'assets/images.png', ['cairo', 'sohage']);
  listFilter: string = '';
  listFilterByNumber: number = 0;
  cart: IProduct[] = [];
  public sowImage: boolean = true;
  productNumber: number = 0;

  func1(newProduct: IProduct) {
    if (this.cart.length == 0) {
      newProduct.totalPrice = newProduct.Price * newProduct.productNumber;
      this.cart.push(newProduct);
    } else {
      var index = this.cart.findIndex((x) => x.id == newProduct.id);
      if (index != -1) {
        this.cart[index].totalPrice =
          this.cart[index].Price * this.cart[index].productNumber;
      } else {
        newProduct.totalPrice = newProduct.Price * newProduct.productNumber;
        this.cart.push(newProduct);
      }
    }
  }
  func2(changesowImage: boolean) {
    this.sowImage = !changesowImage;
  }
  func3(value: number) {
    this.productNumber = value;
  }
  deleteItme(item: IProduct) {
    var index = this.cart.findIndex((x) => x.id == item.id);
    this.cart.splice(index, 1);
  }
}
