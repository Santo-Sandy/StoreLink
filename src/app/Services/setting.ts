import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DistributionSettings, NotificationSettings, OrganizationProfile, SecuritySettings, UserProfile } from '../Pages/settings/settings';

@Injectable({
  providedIn: 'root',
})
export class Setting {
  private organizationSubject = new BehaviorSubject<OrganizationProfile>(this.getDefaultOrganization());
  private userSubject = new BehaviorSubject<UserProfile>(this.getDefaultUser());
  private securitySubject = new BehaviorSubject<SecuritySettings>(this.getDefaultSecurity());
  private notificationSubject = new BehaviorSubject<NotificationSettings>(this.getDefaultNotifications());
  private distributionSubject = new BehaviorSubject<DistributionSettings>(this.getDefaultDistribution());

  organization$ = this.organizationSubject.asObservable();
  user$ = this.userSubject.asObservable();
  security$ = this.securitySubject.asObservable();
  notifications$ = this.notificationSubject.asObservable();
  distribution$ = this.distributionSubject.asObservable();

  updateOrganization(data: OrganizationProfile): void {
    this.organizationSubject.next(data);
  }

  updateUser(data: UserProfile): void {
    this.userSubject.next(data);
  }

  updateSecurity(data: SecuritySettings): void {
    this.securitySubject.next(data);
  }

  updateNotifications(data: NotificationSettings): void {
    this.notificationSubject.next(data);
  }

  updateDistribution(data: DistributionSettings): void {
    this.distributionSubject.next(data);
  }

  private getDefaultOrganization(): OrganizationProfile {
    return {
      id: 'ORG001',
      companyName: 'GlobalTrade Logistics',
      registrationNumber: 'REG-2023-001234',
      companyEmail: 'contact@globaltrade.com',
      companyPhone: '+1 (555) 123-4567',
      address: '1500 Enterprise Drive',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'United States',
      industry: 'Distribution & Logistics',
      employeeCount: '150-200',
      website: 'www.globaltrade.com',
      taxId: 'TAX-123456789',
      businessLicense: 'BL-2023-98765'
    };
  }

  private getDefaultUser(): UserProfile {
    return {
      id: 'USR001',
      firstName: 'Robert',
      lastName: 'Martinez',
      email: 'robert.martinez@globaltrade.com',
      phone: '+1 (555) 987-6543',
      role: 'Distribution Manager',
      department: 'Operations',
      jobTitle: 'Senior Distribution Manager'
    };
  }

  private getDefaultSecurity(): SecuritySettings {
    return {
      twoFactorEnabled: true,
      sessionTimeout: 30,
      ipRestriction: false,
      allowedIPs: [],
      lastPasswordChange: new Date(2024, 0, 15)
    };
  }

  private getDefaultNotifications(): NotificationSettings {
    return {
      emailNotifications: true,
      smsAlerts: true,
      lowStockAlerts: true,
      deliveryUpdates: true,
      weeklyReports: true,
      timezone: 'America/Los_Angeles',
      language: 'English'
    };
  }

  private getDefaultDistribution(): DistributionSettings {
    return {
      defaultWarehouse: 'SF_MAIN_001',
      shippingProvider: 'FedEx',
      autoAssignmentEnabled: true,
      routeOptimization: true,
      invoiceFormat: 'PDF',
      currency: 'USD'
    };
  }
}
