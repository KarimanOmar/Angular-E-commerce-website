// b.	In products Component, and ProductDetails Component use the previous service instead of using the classes directly.
// i)	Services in Angular are using Dependency Injection; you’ll need to inject the service in your component constructor, how?
// *****************************************************************************************************
// (1)	""""navigate()"""" function in router service, return a promise, try it to print any message in the console after the navigation is completed.
// ii)	Can you do it by a link instead?
// *****************************************************************************************************
// c.	Create """"ProductDetails Component"""", that receives an id and display the given product details.
// d.	In the """"ProductDetails Component"""", get the sent ID, and display the given product details.
// i)	You’ll need to use ActivatedRoute service, how?
// e.	Add (Go back) button, that uses browser’s back to go back to the products page.

// 3.	In product details component, add 2 new buttons: """Next product, Previous product""", that navigate to the previous or next product.
// a.	You will need to use activated """route service""" params observable instead of using activated route snapshots params, why?


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Location } from '@angular/common'
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public AllProducts: IProduct[] = []
  public protect: IProduct | undefined = undefined
  public producIDstList: number[] = [];
  public productID: number = 0
  currentIndex: number = 0;
  constructor(public router: Router, public activeRoute: ActivatedRoute, public location: Location, private ProductFromApiService: ProductWithApiService) { }

  ngOnInit(): void {
    //inatieal productList
    this.ProductFromApiService.getAllProduct().subscribe(
      data => {
        this.AllProducts = data
      }
    );

    this.producIDstList = this.AllProducts.map((pro) => pro.id)
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.productID = (paramMap.get('productID')) ? Number(paramMap.get('productID')) : 0
      let ProductByID = this.ProductFromApiService.getProductByID(this.productID).subscribe(
        data => {
          if (ProductByID) {
            this.protect = data
          } else {
            this.location.back()
          }
        }

      )

    })
  }
  goBackeProductList() {
    this.router.navigate(['/Products'])
  }
  previous() {
    console.log(this.currentIndex);
    this.currentIndex = this.producIDstList.indexOf(this.productID)
    this.router.navigate(['/ProductDetails', this.producIDstList[--this.currentIndex]])
  }
  next() {
    console.log(this.currentIndex);
    this.currentIndex = this.producIDstList.indexOf(this.productID)
    this.router.navigate(['/ProductDetails', this.producIDstList[++this.currentIndex]])
  }


}
