import { UserService } from './../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: User = new User();
  users: Array<User> = [];
  errorMsg: string = ""; 
  
  //Reactive Form Validations
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  constructor(private _httpClient: HttpClient, private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._httpClient.get<User[]>('http://localhost:3000/users').subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => {console.log(error) });
   
    
  }

  //Reference for Form Controls
  get f(){
    return this.loginForm?.controls;
  }

  onSubmit(){
    console.log("Info submitted")
  }

  login(){
    if(!this.loginForm.valid){
      console.log("Invalid Credentials");
      return;
    }

    console.log(JSON.stringify(this.loginForm.value));
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  isUserExist(){
    for(const userDetails of this.users){
      if(userDetails.username == this.user.username && userDetails.password == this.user.password){
        return true;
      }
    }
    return false;
  }

}
