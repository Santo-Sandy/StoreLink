import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntroCard } from "../../layouts/intro-card/intro-card";
import { Sessionlogin } from '../../Services/sessionlogin';

@Component({
  selector: 'app-hubs',
  imports: [FormsModule, CommonModule, IntroCard],
  templateUrl: './hubs.html',
  styleUrl: './hubs.css',
})
export class Hubs {

  constructor(){
    Sessionlogin.session.set(true);
  }
  searchText = '';

  hubs = [
    {
      name: 'Hub 1',
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
      ]
    },
    {
      name: 'Hub 2',
      city: 'Hyderabad',
      state: 'Andhra Pradesh',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      linkedHubs: [
        { name: 'Hub 1', city: 'Chennai' },
        { name: 'Hub 3', city: 'Bengaluru' }
      ],
      depots: [
        { name: 'Depot', city: 'Hyderabad' }
      ]
    },
    {
      name: 'Hub 3',
      city: 'Bengaluru',
      state: 'Karnataka',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      linkedHubs: [
        { name: 'Hub 1', city: 'Chennai' }
      ],
      depots: [
        { name: 'Depot 1', city: 'Bengaluru' },
        { name: 'Depot 2', city: 'Bengaluru' }
      ]
    }
  ];

  filteredHubs() {
    return this.hubs.filter(hub =>
      hub.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      hub.city.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}


