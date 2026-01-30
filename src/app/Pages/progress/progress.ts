import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntroCard } from "../../layouts/intro-card/intro-card";
import { RouterOutlet } from "@angular/router";
import { ProgressData } from '../../Services/progress-data';
import { Sessionlogin } from '../../Services/sessionlogin';

interface Stage {
  id: number;
  name: string;
  icon: string;
  locations: string[];
}
@Component({
  selector: 'app-progress',
  imports: [CommonModule, FormsModule, IntroCard, RouterOutlet],
  templateUrl: './progress.html',
  styleUrl: './progress.css',
})
export class Progress {
  

  public stages:Stage[]=[];

  searchText='';

  products!:any;
  constructor(private items:ProgressData){
    this.products=this.items.set();
    Sessionlogin.session.set(true);
  }
  
    

  
}

