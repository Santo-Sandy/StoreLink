import { Component, inject } from '@angular/core';
import { StoreData } from '../../../Services/store-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  quantity: number;
  minStock: number;
  maxStock: number;
  price: string;
  lastRestocked: string;
  supplier: string;
  status: string;
}

@Component({
  selector: 'app-store-details',
  imports: [FormsModule,CommonModule],
  templateUrl: './store-details.html',
  styleUrl: './store-details.css',
})
export class StoreDetails {

  selectedProduct: Product | null = null;

  private q=inject(ActivatedRoute);

  store;
  stores;
  storeData;
  currentProducts;
  supplyChain;
  id:string='';

  constructor(private storedatas:StoreData){
    this.stores=this.storedatas.sets();
    this.store=this.stores[0];
    this.storeData=this.store.storeData;
    this.currentProducts=this.store.currentProducts;
    this.supplyChain=this.store.supplyChain;

  }
  ngOnInit(){
    this.q.paramMap.subscribe((value:any)=>{
      var param=value.params;
      this.id=param.id??'';
      this.store=this.stores.filter((store:any)=>store.storeData.name==this.id)[0];
    })
    this.storeData=this.store.storeData;
    this.currentProducts=this.store.currentProducts;
    this.supplyChain=this.store.supplyChain;
    
  }


  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'In Stock': return 'status-in-stock-s';
      case 'Low Stock': return 'status-low-stock-s';
      case 'Out of Stock': return 'status-out-stock-s';
      default: return 'status-default-s';
    }
  }

  getStockPercentage(current: number, max: number): number {
    return (current / max) * 100;
  }

  getStockLevelClass(current: number, max: number): string {
    const percentage = this.getStockPercentage(current, max);
    if (percentage > 50) return 'stock-high-s';
    if (percentage > 25) return 'stock-medium-s';
    return 'stock-low-s';
  }

  getLowStockCount(): number {
    return this.store.currentProducts.filter(p => p.status === 'Low Stock').length;
  }
  

}
