import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { IntroCard } from "../../layouts/intro-card/intro-card";
import { Sessionlogin } from '../../Services/sessionlogin';

@Component({
  selector: 'app-depos',
  imports: [FormsModule, CommonModule, RouterOutlet, IntroCard],
  templateUrl: './depos.html',
  styleUrl: './depos.css',
})
export class Depos {

  constructor(){
    Sessionlogin.session.set(true);
  }

  searchText='';

  depos=[
    {
      name: 'Depo 1',
      city: 'Chennai',
      state: 'Tamil Nadu',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      linkedHubs: [
        { name: 'Hub 2', city: 'Hyderabad' }
      ],
      depots: [
        { name: 'Depot', city: 'Chennai' }
      ],
      stores:[
        {name:'Store',city:'chennai'}
      ]
    },
    {
      name: 'Depo 2',
      city: 'Hyderabad',
      state: 'Andra pradesh',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      linkedHubs: [
        { name: 'Hub 1', city: 'Chennai' },
        { name: 'Hub 2', city: 'Hyderabad' }

      ],
      depots: [
        { name: 'Depot 1', city: 'Chennai' }
      ],
      stores:[
        {name:'Store 1',city:'Hyderabad'}
      ]
    },
    {
      name: 'Depo 3',
      city: 'Bengaluru',
      state: 'Karnataka',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      linkedHubs: [
        { name: 'Hub 2', city: 'Bengaluru' }
      ],
      depots: [
        { name: 'Depot 1', city: 'Chennai' }
      ],
      stores:[
        {name:'Store 1',city:'Bengaluru'}
      ]
    }
  ]

  filtereddepos(){
    return this.depos.filter(depo=>
      depo.name.toLowerCase().includes(this.searchText.toLowerCase())||
      depo.city.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
