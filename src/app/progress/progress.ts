import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';

interface Stage {
  id: number;
  name: string;
  icon: string;
  locations: string[];
}
@Component({
  selector: 'app-progress',
  imports: [CommonModule,FormsModule],
  templateUrl: './progress.html',
  styleUrl: './progress.css',
})
export class Progress {

  public stages:Stage[]=[];

  constructor(private sanitizer:DomSanitizer) {
    
  }

  searchText='';
  
  products=[
    {
      productId:"PRD-2024-001",
      name:"Product 1",
      quantity:"2000 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"High",
      currentStage:1,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1','Hub 2'] },
        { id: 3, name: 'Depots', icon: 'truck', locations: ['Depo 1', 'Depo 2', 'Depo 3'] },
        { id: 4, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-034",
      name:"Product 2",
      quantity:"1670 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Medium",
      currentStage:2,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2','Hub 3'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1', 'Depo 2', 'Depo 3'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-099",
      name:"Product 3",
      quantity:"1299 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Normal",
      currentStage:3,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1', 'Depo 2', 'Depo 3'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-198",
      name:"Product 4",
      quantity:"789 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Medium-low",
      currentStage:4,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-201",
      name:"Product 5",
      quantity:"399 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Low",
      currentStage:5,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1'] }
      ]
    }
  ];
  

  setCurrentStage(stageId: number,productId: number): void {
    this.products[productId].currentStage = stageId;
  }

  getStageStatus(stageId: number,productId: number): string {
    if (stageId < this.products[productId].currentStage) return 'completed';
    if (stageId === this.products[productId].currentStage) return 'active';
    return 'pending';
  }

  getProgressPercentage(productId:number): number {
    return Math.round(((this.products[productId].currentStage - 1) / (this.products[productId].stages.length - 1)) * 100);
  }

  getCompletedStages(productId:number): number {
    return this.products[productId].currentStage - 1;
  }

  getCurrentStageName(productId:number): string {
    return this.products[productId].stages[this.products[productId].currentStage - 1]?.name || '';
  }

  


  getIconSvg(icon: string): SafeHtml {
    const icons: Record<string,string> = {
      package: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
      warehouse: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/></svg>',
      truck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
      store: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>',
      check: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    };
    const svg=icons[icon] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}

