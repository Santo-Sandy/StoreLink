import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuppliersData } from '../../../Services/suppliers-data';
import { ActivatedRoute } from '@angular/router';

interface Suppliers {
  id: string;
  name: string;
  location: string;
  status:string;
  contact: string;
  email: string;
  capacity: string;
  currentProduction: number;
  established: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  description: string;
  unitPrice: number;
  productionCapacity: number;
  currentStock: number;
  monthlyProduction: number;
}

interface Hub {
  id: string;
  name: string;
  location: string;
  distance: string;
  capacity: number;
}

interface ProductDistribution {
  id: string;
  productId: string;
  productName: string;
  hubId: string;
  hubName: string;
  quantitySent: number;
  date: string;
  status: 'pending' | 'in-transit' | 'delivered';
}

interface MonthlyProductionRecord {
  month: string;
  year: number;
  productId: string;
  productName: string;
  produced: number;
  distributed: number;
  remaining: number;
}


@Component({
  selector: 'app-supplier',
  imports: [FormsModule,CommonModule],
  templateUrl: './supplier.html',
  styleUrl: './supplier.css',
})
export class Supplier  {

  private q=inject(ActivatedRoute);

  id!:string;
  suppliers;
  supplierindividual;
  supplier;
  products;
  hubs;
  distributions;
  productionRecords;

  constructor(private suppliersData:SuppliersData){
    this.suppliers=this.suppliersData.set();
    this.supplierindividual=this.suppliers[0];
    this.supplier=this.supplierindividual.supplier;
    this.products=this.supplierindividual.products;
    this.hubs=this.supplierindividual.hubs;
    this.distributions=this.supplierindividual.distributions;
    this.productionRecords=this.supplierindividual.productionRecords;
  }

  selectedProduct: Product | null = null;
  selectedView: 'products' | 'distributions' | 'production' = 'products';
  selectedMonth: string = 'December';
  selectedYear: number = 2024;

  ngOnInit(): void {
    this.q.paramMap.subscribe((value:any)=>{
      var param=value.params;
      this.id=param.id??'';
      this.supplierindividual=this.suppliers.filter((supplier:any)=>supplier.supplier.name==this.id)[0];
      this.supplier=this.supplierindividual.supplier;
      this.products=this.supplierindividual.products;
      this.hubs=this.supplierindividual.hubs;
      this.distributions=this.supplierindividual.distributions;
      this.productionRecords=this.supplierindividual.productionRecords;
    })
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeProductModal(): void {
    this.selectedProduct = null;
  }

  getStatusClass(status: string): string {
    return {
      pending: 'status-pending',
      'in-transit': 'status-transit',
      delivered: 'status-delivered'
    }[status] || '';
  }

  getProductionPercentage(produced: number, capacity: number): number {
    return (produced / capacity) * 100;
  }

  getTotalMonthlyProduction(): number {
    return this.products.reduce((sum, p) => sum + p.monthlyProduction, 0);
  }

  getTotalCurrentStock(): number {
    return this.products.reduce((sum, p) => sum + p.currentStock, 0);
  }

  getDistributionStatus() {
    return {
      pending: this.distributions.filter(d => d.status === 'pending').length,
      transit: this.distributions.filter(d => d.status === 'in-transit').length,
      delivered: this.distributions.filter(d => d.status === 'delivered').length
    };
  }

  getHubLocation(hubId: string): string {
    return this.hubs.find(h => h.id === hubId)?.location || '';
  }

  getDistributionsByHub(hubId: string): ProductDistribution[] {
    return this.distributions.filter(d => d.hubId === hubId) as ProductDistribution[];
  }

  getFilteredProductionRecords(): MonthlyProductionRecord[] {
    return this.productionRecords.filter(
      r => r.month === this.selectedMonth && r.year === this.selectedYear
    );
  }

  getMonths(): string[] {
    return ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
  }

  getYears(): number[] {
    return [2024, 2023, 2022];
  }

  getProductDistributions(productId: string): ProductDistribution[] {
    return this.distributions.filter(d => d.productId === productId) as ProductDistribution[];
  }
}