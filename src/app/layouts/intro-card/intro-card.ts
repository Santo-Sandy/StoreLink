import { CommonModule } from '@angular/common';
import { Component, inject, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-card',
  imports: [CommonModule],
  templateUrl: './intro-card.html',
  styleUrl: './intro-card.css',
})
export class IntroCard {

  private route=inject(Router);


  @Input()
  place!:any;

  view(){
    if(this.place.productId){
      this.route.navigate(['trackproduct',this.place.productId]);
    }
    if(this.place.storeData){
      this.route.navigate(['store-details',this.place?.storeData?.name]);
    }
    if(this.place.supplier){
      this.route.navigate(['supplier',this.place?.supplier?.name]);
    }
    if(this.place.depot){
      this.route.navigate(['depo',this.place?.depot?.id]);
    }
  }

}
