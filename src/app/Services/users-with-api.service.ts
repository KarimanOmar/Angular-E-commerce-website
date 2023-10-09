import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersWithApiService {

  http = {};
  // public ClientName: String;
  // public Cardnumber: String;
  //inject
  isLogBehavior:BehaviorSubject<boolean>
  constructor(private HttpClient: HttpClient) {
    // this.Cardnumber = '0000000000000000';
    // this.ClientName = 'ahmed';
    this.isLogBehavior =new BehaviorSubject<boolean>(this.isUserLoggedIn)
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
  get isUserLoggedIn():boolean{
    return (localStorage.getItem('token'))?true:false
  }
  // getAllProduct(): Observable<IProduct[]> {
  //   return this.HttpClient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  // }
  // getProductByID(productID: number): Observable<IProduct> {
  //   return this.HttpClient.get<IProduct>(`${environment.BaseApiURL}/products/${productID}`);
  // }
  signUpUser(User: IUser): Observable<IUser> {
    console.log(User);

    var token= "this-is-my-secret-key"
    localStorage.setItem("token", token);
    this.isLogBehavior.next(true);

    return this.HttpClient.post<IUser>(
      `${environment.BaseApiURL}/users`,
      JSON.stringify(User), this.http
    );
  }
}


