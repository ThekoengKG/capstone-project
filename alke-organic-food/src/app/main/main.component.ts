import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authGuardService: AuthGuardService, private _router: Router) { }

  ngOnInit(): void {
  }

  logInStatus() {
    if(this._authGuardService.isLoggedIn()){
      return true;
    } else{
      return false;
    }
  }

  logout(){
    this._authGuardService.logout();
    alert("Logged out successfully");
    this._router.navigate(['/home']);
  }

}
