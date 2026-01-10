import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

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
  
  loginEmail = '';
  loginPassword = '';
  rememberMe = false;
  
  registerName = '';
  registerEmail = '';
  registerPassword = '';
  confirmPassword = '';
  acceptTerms = false;

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
  }

  resetPasswordToggles() {
    this.showPassword = false;
    this.showConfirmPassword = false;
  }

}
