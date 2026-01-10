import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Sessionlogin } from '../../Services/sessionlogin';
import { LoginRegister } from '../login-register/login-register';

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
  visible: boolean;
}


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, LoginRegister],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  
  scrolled = false;
  heroVisible = false;
  currentYear = new Date().getFullYear();
  private route=inject(Router);
  session!:any;



  constructor(private sessionLogin:Sessionlogin) {
    this.session=sessionLogin.session;
    setTimeout(() => {
      this.heroVisible = true;
    }, 100);
  }

  stats: Stat[] = [
    { value: '50K+', label: 'Active Users' },
    { value: '2M+', label: 'Deliveries/Month' },
    { value: '99.9%', label: 'Uptime' },
    { value: '150+', label: 'Countries' }
  ];

  features: Feature[] = [
    { 
      icon: 'trending-up', 
      title: 'Real-time Tracking', 
      description: 'Monitor your entire distribution network with live updates and GPS tracking for all shipments',
      visible: false
    },
    { 
      icon: 'bar-chart', 
      title: 'Advanced Analytics', 
      description: 'Make data-driven decisions with comprehensive reports and predictive insights',
      visible: false
    },
    { 
      icon: 'users', 
      title: 'Multi-user Access', 
      description: 'Collaborate seamlessly with role-based permissions and team management tools',
      visible: false
    },
    { 
      icon: 'zap', 
      title: 'Automated Workflows', 
      description: 'Reduce manual tasks with intelligent automation and smart routing algorithms',
      visible: false
    },
    { 
      icon: 'shield', 
      title: 'Secure & Compliant', 
      description: 'Enterprise-grade security with compliance to industry standards and regulations',
      visible: false
    },
    { 
      icon: 'globe', 
      title: 'Global Reach', 
      description: 'Manage distribution across multiple regions with multi-currency and language support',
      visible: false
    }
  ];

  solutions: string[] = [
    'Inventory Management',
    'Order Processing',
    'Route Optimization',
    'Warehouse Management',
    'Customer Portal',
    'Mobile App Integration'
  ];

  mockData = [1, 2, 3, 4];

  ngOnInit() {
    
    this.features.forEach((feature, index) => {
      setTimeout(() => feature.visible = true, index * 100);
    });
  }

  openLogin(login:string='login') {
      this.route.navigate(['login-register',login]);
  }

  openRegister(register:string='register') {
    this.route.navigate(['login-register',register]);
  }

  demo(){
    this.session.set(true);
    this.route.navigate(['dashboard']);
  }




  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}

