import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from 'src/app/Models/store';
import { MainComponent } from '../main/main.component';
import { UserAuthServiceService } from 'src/app/Services/user-auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userLog:boolean=false;
  isUserLogged:boolean;
  constructor(private userAuth:UserAuthServiceService, private userAuthService: UserAuthServiceService,private router: Router){
  this.isUserLogged=this.userAuth.isUserLoggedIn;

  }
    ngOnInit(): void {

      this.userAuth.getUserStatus().subscribe({
        next:(user) => {
          this.isUserLogged=user;
          console.log(this.isUserLogged);


        },
        error:(error) => {
          console.log(error);

        }

      });

    }
    userLogout(){
      this.userAuthService.logout();
      this.userLog=this.userAuthService.isUserLoggedIn;
      this.router.navigate(['/logIn']);

    }
  public sowImage:boolean =true

  store:Store = new Store("JUMIA", 'assets/images.png' , ["cairo","sohage"])

  toggleImage(){
    this.sowImage = !this.sowImage
  }
}
