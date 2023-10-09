import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class UserAuthServiceService {
isLogBehavior:BehaviorSubject<boolean>
  constructor() {
    this.isLogBehavior =new BehaviorSubject<boolean>(this.isUserLoggedIn)
   }
   get isUserLoggedIn():boolean{
    return (localStorage.getItem('token'))?true:false
  }
    login(email:string, password:string){
    let Token= "this-is-my-secret-key";
    localStorage.setItem("token", Token);
    this.isLogBehavior.next(true);
  }
  logout(){
    localStorage.removeItem("token");
    this.isLogBehavior.next(false);

  }

  getUserStatus():Observable<boolean> {
    return this.isLogBehavior.asObservable();
  }


}

