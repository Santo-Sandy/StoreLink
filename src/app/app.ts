import { CommonModule } from '@angular/common';
import {  Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import { MatIconModule, MatIcon } from '@angular/material/icon'
import { Home } from './starts/home/home';
import { Sessionlogin } from './Services/sessionlogin';

interface FooterSection {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, CommonModule, FormsModule, ReactiveFormsModule, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sample');

  session!:any;
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  commentForm: FormGroup;
  currentYear: number = new Date().getFullYear();

  features = [
    'Multi-store inventory synchronization',
    'Automated supplier ordering',
    'Real-time delivery tracking',
    'Analytics and reporting dashboard',
    '24/7 technical support'
  ];

  constructor(private fb: FormBuilder,private sessionLogin:Sessionlogin,private route:Router) {
    this.session=this.sessionLogin.session;
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

    footerSections: FooterSection[] = [
    { title: 'Product', links: ['Features', 'Pricing', 'Security'] },
    { title: 'Company', links: ['About', 'Careers', 'Contact'] }
  ];

  onSubmit() {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;
      alert(`Thank you for your message, ${formData.name}!\n\nWe have received your inquiry and will respond to ${formData.email} within 24 hours.`);
      this.commentForm.reset();
    } else {
      this.markFormGroupTouched(this.commentForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.commentForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

}
