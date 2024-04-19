import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {

  constructor(private location: Location) {}
  
  back(): void {
    this.location.back();
  }

  numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

  setLevel(level: number) {
    localStorage.setItem('currentLevel', level.toString());
  }
}
