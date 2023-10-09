import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductWithApiService {
  http = {};
  public ClientName: String;
  public Cardnumber: String;
  //inject
  constructor(private HttpClient: HttpClient) {
    this.Cardnumber = '0000000000000000';
    this.ClientName = 'ahmed';
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
  getAllProduct(): Observable<IProduct[]> {
    return this.HttpClient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }
  getProductByID(productID: number): Observable<IProduct> {
    return this.HttpClient.get<IProduct>(`${environment.BaseApiURL}/products/${productID}`);
  }
  deleteProduct(product: IProduct): Observable<IProduct>{
    return this.HttpClient.delete<IProduct>(`${environment.BaseApiURL}/products/${product.id}`);
  }
  addProdact(product: IProduct): Observable<IProduct> {
    return this.HttpClient.post<IProduct>(
      `${environment.BaseApiURL}/products`,
      JSON.stringify(product), this.http
    );
  }
  editProdact(product: IProduct){

    return this.HttpClient.patch<IProduct>(
      `${environment.BaseApiURL}/products/${product.id}`,
      JSON.stringify(product), this.http
    );
  }
}
