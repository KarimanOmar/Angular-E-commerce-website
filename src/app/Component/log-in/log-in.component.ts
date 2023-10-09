import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';
import { UserAuthServiceService } from 'src/app/Services/user-auth-service.service';
import { UsersWithApiService } from 'src/app/Services/users-with-api.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  userLog:boolean=false;
  userForm:FormGroup
  user: IUser = {} as IUser;
  constructor(private UserFromApiService: UsersWithApiService, private router: Router , private formbulider:FormBuilder , private userAuthService: UserAuthServiceService) {
    this.userForm = this.formbulider.group({
      FirstName:['',[Validators.required,Validators.pattern('^[A-Za-z]{2,}$')]],
      LastName:['',[Validators.required,Validators.pattern('^[A-Za-z]{2,}$')]],
      Email:['',[Validators.required,Validators.pattern('^[a-zA-z0-9]{3,}@[a-z0-9]{3,}(.com)$')]],
      Password:['',[Validators.required]]
    })

      }

      get FirstName(){
      return this.userForm.get('FirstName')
      }
      get LastName(){
      return this.userForm.get('LastName')
      }
      get Email(){
      return this.userForm.get('Email')
      }
      get Password(){
      return this.userForm.get('Password')
      }

      ngOnInit(): void {

        this.userLog=this.userAuthService.isUserLoggedIn;
        // console.log(this.userLog);

      }
      userLogin(){

        this.userAuthService.login(this.user.Email,this.user.Password);
        this.userLog=this.userAuthService.isUserLoggedIn;


      }
      signIn() {
        console.log("signUp");

            this.UserFromApiService.signUpUser(this.user).subscribe({
              next: (User) => {
                this.router.navigate(['/Products']);
              },
              error: (err) => {
                console.log(err);

              }
            })
          }

}
