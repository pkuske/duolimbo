import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {

  constructor(private router: Router){}
  goToOverview(value: string) {
    let url = ['/', value] ;
    this.router.navigate(url); 
    
  }
}
