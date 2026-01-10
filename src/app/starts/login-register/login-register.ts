import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Sessionlogin } from '../../Services/sessionlogin';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  imports: [CommonModule,FormsModule,MatIcon],
  templateUrl: './login-register.html',
  styleUrl: './login-register.css',
})
export class LoginRegister {
  showLogin = false;
  showRegister = false;
  showPassword = false;
  showConfirmPassword = false;

  loginid!:any;
  registerid!:any;
  
  loginEmail = '';
  loginPassword = '';
  rememberMe = false;
  
  registerName = '';
  registerEmail = '';
  registerPassword = '';
  confirmPassword = '';
  acceptTerms = false;
  id;

  private route=inject(ActivatedRoute);

  constructor(private router:Router){
    this.id=this.route.params.subscribe(params=>{
      this.loginid=params['id'];
    });
    if(this.loginid=='login'){
      this.Login();
    } else if(this.loginid=='register'){
      this.Register();
    }
  }

  ngOnInit() {
    
  }
  Login() {
    this.showRegister = false;
    this.showLogin = true;
    this.resetPasswordToggles();
  }

  Register() {
    this.showLogin = false;
    this.showRegister = true;
    this.resetPasswordToggles();
  }
    closeAll() {
    this.showLogin = false;
    this.showRegister = false;
    this.resetPasswordToggles();
    this.router.navigate(['/']);
  }

  resetPasswordToggles() {
    this.showPassword = false;
    this.showConfirmPassword = false;
  }

}
