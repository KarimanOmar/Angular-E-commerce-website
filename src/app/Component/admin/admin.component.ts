import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']

})
export class AdminComponent implements OnInit {
  public productID: number = 0
  public protect: IProduct | undefined = undefined
  constructor(public activeRoute: ActivatedRoute, private ProductFromApiService: ProductWithApiService, public location: Location, public router: Router) {

  }
  ngOnInit(): void {
    try {
      this.activeRoute.paramMap.subscribe(paramMap => {
        this.productID = (paramMap.get('productID')) ? Number(paramMap.get('productID')) : 0
        let ProductByID = this.ProductFromApiService.getProductByID(this.productID).subscribe(
          data => {
            if (ProductByID) {
              this.protect = data
            } else {
              this.protect = undefined
            }
          }
        )
      })
    } catch (err) {
      console.log("err");

    }

  }

  Product: IProduct = {} as IProduct;

  addProduct() {

    this.ProductFromApiService.addProdact(this.Product).subscribe({
      next: (Product) => {
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  editProduct() {

    this.ProductFromApiService.editProdact(this.protect!).subscribe({
      next: (Product) => {
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
