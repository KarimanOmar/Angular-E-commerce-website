import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Store } from 'src/app/Models/store';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { IProduct } from 'src/app/Models/iproduct';
import { ICategory } from 'src/app/Models/icategory';
import { NavbarComponent } from '../navbar/navbar.component';
import { Data, Route } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Router } from '@angular/router';
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';
import { CategoriesWithApiService } from 'src/app/Services/categories-with-api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  date1: string = new Date().toLocaleDateString();

  store: Store = new Store('JUMIA', 'assets/images.png', ['cairo', 'sohage']);

  public filteredProducts: IProduct[] = [];
  public AllCategories: ICategory[] = [];

  constructor(public router: Router, private ProductFromApiService: ProductWithApiService, private CategoriesFromApiService: CategoriesWithApiService) { }
  deleteProduct(item:IProduct){
    let confirmed = confirm("Do you want delete this")
    if(confirmed){
    this.ProductFromApiService.deleteProduct(item).subscribe()
    console.log("Done");

        this.ProductFromApiService.getAllProduct().subscribe(
      data => {
        this.filteredProducts = data
        console.log("Done");

      }
    );
    }

  }

  ngOnInit(): void {
    this.CategoriesFromApiService.getAllCategories().subscribe(
      data => {
        this.AllCategories = data
        console.log(this.AllCategories)
      }
    );
    this.ProductFromApiService.getAllProduct().subscribe(
      data => {
        this.filteredProducts = data
      }
    );
  }
  performfilter(filterValue: string): IProduct[] {
    filterValue = filterValue.toLowerCase();
    return this.filteredProducts.filter((prd: IProduct) =>
      prd.Name.toLowerCase().includes(filterValue)
    );
  }
  performfilterByCaticory(filterValue: number): IProduct[] {
    return this.filteredProducts.filter(
      (prd: IProduct) => prd.CateogryID == filterValue
    );
  }
  performfilterByPrice(filterValue: number): IProduct[] {
    return this.filteredProducts.filter((prd: IProduct) => prd.Price == filterValue);
  }
  getProductsByCatID(): number[] {
    return this.filteredProducts.map((pro) => pro.id);
  }

  @Input() set listFilterByName(value: string) {
    console.log(this.filteredProducts);
    this.filteredProducts = this.performfilter(value);
  }

  set listFilterByCaticory(value: number) {
    console.log(value);
    if (value == 0) {
      this.filteredProducts = this.filteredProducts;
    } else {
      this.filteredProducts =
        this.performfilterByCaticory(value);
    }
  }

  @Input() set listFilterByPrice(value: number) {
    console.log(value);
    if (value == 0) {
      this.filteredProducts = this.filteredProducts;
    } else {
      this.filteredProducts =
        this.performfilterByPrice(value);
    }
  }

  productNumber: number = 0;
  set coundProdact(value: number) {
    if (value) {
      console.log(value);

      this.productNumber = value;
      console.log(this.productNumber);
    }
  }
  @Output() productNumberEvent = new EventEmitter<number>();
  productNumberFunc() {
    this.productNumberEvent.emit(this.productNumber);
  }
  sowImage: boolean = true;
  @Output() sowImageEvent = new EventEmitter<boolean>();
  toggleImage() {
    this.sowImageEvent.emit(this.sowImage);
  }
  @Output() newProductIncardEvent = new EventEmitter<IProduct>();
  addToCard(item: IProduct) {
    if (item.Quantity && this.productNumber <= item.Quantity) {
      if (this.productNumber != 0) {
        item.productNumber += this.productNumber;
        this.newProductIncardEvent.emit(item);
        console.log('if', this.productNumber);
        this.productNumber = 0;
      } else {
        item.productNumber += 1;
        this.newProductIncardEvent.emit(item);
        console.log('else', item.productNumber);
        this.productNumber = 0;
      }
      item.Quantity--;
    }
    this.productNumber = 0;
  }
  pDetails(pID: number) {
    this.router.navigate(["ProductDetails/", pID])
  }
  editProduct(pID: number) {
    this.router.navigate(["Admin/", pID])
  }

}
