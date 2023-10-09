import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';
import { UsersWithApiService } from 'src/app/Services/users-with-api.service';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})
export class SignUpUserComponent {
  userForm:FormGroup
  constructor(private UserFromApiService: UsersWithApiService, private router: Router , private formbulider:FormBuilder) {
this.userForm = this.formbulider.group({
  FirstName:['',[Validators.required,Validators.pattern('^[A-Za-z]{2,}$')]],
  LastName:['',[Validators.required,Validators.pattern('^[A-Za-z]{2,}$')]],
  Email:['',[Validators.required,Validators.pattern('^[a-zA-z0-9]{3,}@[a-z0-9]{3,}(.com)$')]],
  Password:['',[Validators.required]]
})

  }
  user: IUser = {} as IUser;
  signUp() {
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


}
