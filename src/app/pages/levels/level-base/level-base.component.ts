import { Component } from '@angular/core';

@Component({
  selector: 'app-level-base',
  templateUrl: './level-base.component.html',
  styleUrls: ['./level-base.component.scss']
})
export class LevelBaseComponent {
  public level: number = 1;
  public progress: number = 9; // make this variable depending on what level it is

  getDoneArray(): any[] {
    return new Array(this.progress);
  }

  getToDoArray(): any[] {
    return new Array(10 - this.progress);
  }
}
