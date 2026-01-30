import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Setting } from '../../Services/setting';
import { CommonModule } from '@angular/common';
import { Sessionlogin } from '../../Services/sessionlogin';

export interface OrganizationProfile {
  id: string;
  companyName: string;
  registrationNumber: string;
  companyEmail: string;
  companyPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  industry: string;
  employeeCount: string;
  website: string;
  taxId: string;
  businessLicense: string;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  jobTitle: string;
  profileImage?: string;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  ipRestriction: boolean;
  allowedIPs: string[];
  apiKey?: string;
  lastPasswordChange: Date;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsAlerts: boolean;
  lowStockAlerts: boolean;
  deliveryUpdates: boolean;
  weeklyReports: boolean;
  timezone: string;
  language: string;
}

export interface DistributionSettings {
  defaultWarehouse: string;
  shippingProvider: string;
  autoAssignmentEnabled: boolean;
  routeOptimization: boolean;
  invoiceFormat: string;
  currency: string;
}
@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  activeTab: string = 'profile';
  isEditing: boolean = false;
  saveSuccess: boolean = false;
  saveError: boolean = false;

  userForm!: FormGroup;
  organizationForm!: FormGroup;
  securityForm!: FormGroup;
  notificationForm!: FormGroup;
  distributionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private settingsService: Setting
  ) {
    Sessionlogin.session.set(true);
  }

  ngOnInit(): void {
    this.initializeForms();
    this.loadData();
  }

  initializeForms(): void {
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)]],
      role: ['', Validators.required],
      department: ['', Validators.required],
      jobTitle: ['', Validators.required]
    });

    this.organizationForm = this.fb.group({
      id: [''],
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      registrationNumber: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email]],
      companyPhone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      industry: ['', Validators.required],
      employeeCount: ['', Validators.required],
      website: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      taxId: ['', Validators.required],
      businessLicense: ['', Validators.required]
    });

    this.securityForm = this.fb.group({
      twoFactorEnabled: [false],
      sessionTimeout: [30, [Validators.required, Validators.min(5), Validators.max(480)]],
      ipRestriction: [false],
      allowedIPs: [''],
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: ['']
    });

    this.notificationForm = this.fb.group({
      emailNotifications: [true],
      smsAlerts: [true],
      lowStockAlerts: [true],
      deliveryUpdates: [true],
      weeklyReports: [true],
      timezone: ['', Validators.required],
      language: ['', Validators.required]
    });

    this.distributionForm = this.fb.group({
      defaultWarehouse: ['', Validators.required],
      shippingProvider: ['', Validators.required],
      autoAssignmentEnabled: [true],
      routeOptimization: [true],
      invoiceFormat: ['', Validators.required],
      currency: ['', Validators.required]
    });
  }

  loadData(): void {
    this.settingsService.user$.subscribe(user => {
      this.userForm.patchValue(user);
    });

    this.settingsService.organization$.subscribe(org => {
      this.organizationForm.patchValue(org);
    });

    this.settingsService.security$.subscribe(security => {
      this.securityForm.patchValue(security);
    });

    this.settingsService.notifications$.subscribe(notifications => {
      this.notificationForm.patchValue(notifications);
    });

    this.settingsService.distribution$.subscribe(distribution => {
      this.distributionForm.patchValue(distribution);
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
    this.isEditing = false;
    this.saveSuccess = false;
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    this.saveSuccess = false;
  }

  saveUserProfile(): void {
    if (this.userForm.valid) {
      this.settingsService.updateUser(this.userForm.value);
      this.isEditing = false;
      this.showSaveSuccess();
    }
  }

  saveOrganization(): void {
    if (this.organizationForm.valid) {
      this.settingsService.updateOrganization(this.organizationForm.value);
      this.isEditing = false;
      this.showSaveSuccess();
    }
  }

  saveSecurity(): void {
    if (this.securityForm.get('newPassword')?.value) {
      if (this.securityForm.get('newPassword')?.value !== this.securityForm.get('confirmPassword')?.value) {
        this.saveError = true;
        return;
      }
    }
    this.settingsService.updateSecurity({
      twoFactorEnabled: this.securityForm.get('twoFactorEnabled')?.value,
      sessionTimeout: this.securityForm.get('sessionTimeout')?.value,
      ipRestriction: this.securityForm.get('ipRestriction')?.value,
      allowedIPs: this.securityForm.get('allowedIPs')?.value.split(',').map((ip: string) => ip.trim()),
      lastPasswordChange: new Date()
    });
    this.showSaveSuccess();
  }

  saveNotifications(): void {
    this.settingsService.updateNotifications(this.notificationForm.value);
    this.showSaveSuccess();
  }

  saveDistribution(): void {
    this.settingsService.updateDistribution(this.distributionForm.value);
    this.showSaveSuccess();
  }

  private showSaveSuccess(): void {
    this.saveSuccess = true;
    setTimeout(() => {
      this.saveSuccess = false;
    }, 3000);
  }
}
