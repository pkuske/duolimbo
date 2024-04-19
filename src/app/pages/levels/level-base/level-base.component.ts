import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-level-base',
  templateUrl: './level-base.component.html',
  styleUrls: ['./level-base.component.scss']
})


export class LevelBaseComponent{
  private levelProgress: number = 0;

  constructor(private location: Location) {}
  
  back(): void {
    this.location.back();
  }

  public level = localStorage.getItem('currentLevel');

  getDoneArray(): any[] {
    return new Array(this.levelProgress);
  }

  getToDoArray(): any[] {
    return new Array(10 - this.levelProgress);
  }

  checkAndContinue() {
    //reset counter when it reaches 10, so when the level has been cleared
    if(this.levelProgress < 10) {
      this.levelProgress = this.levelProgress + 1;
    } else {
      this.levelProgress = 0;
    }
    
    console.log(this.levelProgress);
  }
}
