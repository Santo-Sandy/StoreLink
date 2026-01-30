import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepoData } from '../../../Services/depo-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-depo',
  imports: [CommonModule,FormsModule],
  templateUrl: './depo.html',
  styleUrl: './depo.css',
})
export class Depo {

  depot;
  activities;
  shipments;
  private q=inject(ActivatedRoute);
  id:any;
  depo;
  depos;


  activeTab: string = 'overview';

  constructor( private depotdata:DepoData
  ) {
    this.depos=depotdata.depots;
    this.depo=this.depos[0];
    this.depot=depotdata.depots[0].depot;
    this.activities=depotdata.depots[0].activities;
    this.shipments=depotdata.depots[0].shipments;
  }

  ngOnInit(): void {
    this.q.paramMap.subscribe((value:any)=>{
      var param=value.params;
      this.id=param.id??'';
      this.depo=this.depos.filter((depo:any)=>depo.depos.name==this.id)[0];
    })
    
    this.depot=this.depo.depot;
    this.activities=this.depo.activities;
    this.shipments=this.depo.shipments;
  }

  getCapacityPercentage(): number {
    return (this.depot.currentStock / this.depot.capacity) * 100;
  }

  getCapacityClass(): string {
    const percentage = this.getCapacityPercentage();
    if (percentage < 50) return 'depot-capacity-low';
    if (percentage < 80) return 'depot-capacity-medium';
    return 'depot-capacity-high';
  }

  getStatusClass(): string {
    return `depot-status-${this.depot.status}`;
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'inbound': return '📥';
      case 'outbound': return '📤';
      case 'transfer': return '🔄';
      case 'maintenance': return '🔧';
      default: return '📋';
    }
  }

  getActivityClass(type: string): string {
    return `depot-activity-${type}`;
  }

  getShipmentStatusClass(status: string): string {
    return `depot-shipment-${status}`;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }



  editDepot(): void {
    // Navigate to edit page or open modal
    console.log('Edit depot:', this.depot.id);
  }

  deleteDepot(): void {
    if (confirm('Are you sure you want to delete this depot?')) {
      console.log('Delete depot:', this.depot.id);
    }
  }
}