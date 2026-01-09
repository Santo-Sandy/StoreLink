import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

 scrolled = false;
  heroVisible = true;
  currentYear = new Date().getFullYear();

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
    // Hero animation
    setTimeout(() => this.heroVisible = true, 100);
    
    // Feature cards staggered animation
    this.features.forEach((feature, index) => {
      setTimeout(() => feature.visible = true, index * 100);
    });
  }

  sessionCount(){
    window.location.href="/login";
    sessionStorage.setItem('session','true');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }}

