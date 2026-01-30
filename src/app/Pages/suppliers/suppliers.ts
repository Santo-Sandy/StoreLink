import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IntroCard } from "../../layouts/intro-card/intro-card";
import { SuppliersData } from '../../Services/suppliers-data';
import { Sessionlogin } from '../../Services/sessionlogin';

@Component({
  selector: 'app-suppliers',
  imports: [FormsModule, CommonModule, RouterOutlet, IntroCard],
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.css',
})
export class Suppliers {
  searchText='';
  suppliers;
  constructor(private suppliersData:SuppliersData){
    this.suppliers=this.suppliersData.set();
    Sessionlogin.session.set(true);
  }
  filteredsuppliers(){
    return this.suppliers.filter(supplier=>
      supplier.supplier.name.toLowerCase().includes(this.searchText.toLowerCase())||
      supplier.supplier.location.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
