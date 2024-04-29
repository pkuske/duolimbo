import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-level-base',
  templateUrl: './level-base.component.html',
  styleUrls: ['./level-base.component.scss']
})


export class LevelBaseComponent{
  private levelProgress: number = 0;
  public showFooter: boolean  = false
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

  addProgress() {
    if(this.levelProgress < 10) {
      this.levelProgress = this.levelProgress + 1;
    } else {
      this.levelProgress = 0;
    }
  }
}
