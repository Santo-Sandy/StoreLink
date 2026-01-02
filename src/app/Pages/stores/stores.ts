import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IntroCard } from "../../layouts/intro-card/intro-card";
import { StoreData } from '../../Services/store-data';

@Component({
  selector: 'app-stores',
  imports: [FormsModule, CommonModule, IntroCard],
  templateUrl: './stores.html',
  styleUrl: './stores.css',
})
export class Stores {
  
  searchText = '';

  private route=inject(Router);

  private stores;

  constructor(private Stores:StoreData){
    this.stores=this.Stores.sets();

  }

  

  filteredStores() {
    return this.stores.filter(store =>
      store.storeData.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      store.storeData.location.toLowerCase().includes(this.searchText.toLowerCase()) 
    );
  }

}


