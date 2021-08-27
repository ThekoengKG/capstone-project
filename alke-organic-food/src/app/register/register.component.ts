import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  
  registerForm:FormGroup = new FormGroup({
      idNo: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      fullname: new FormControl(null, [Validators.required]),
      username:new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email:new FormControl(null, [Validators.email, Validators.required]),
      phoneNumber:new FormControl(null, [Validators.required, Validators.minLength(7)]),
      password:new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword:new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(private _httpClient: HttpClient, private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    
  }

  moveToLogin(){
    this._router.navigate(['/login'])
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.confirmPassword.value)){
      console.log('Invalid Credentials'); 
      return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value)).subscribe(data => {
      console.log(data);
      this._router.navigate(['/login']);
      error=>console.error(error);
    })

    // console.log(JSON.stringify(this.registerForm.value));
  }



}

