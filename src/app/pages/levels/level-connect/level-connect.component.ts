import { Component } from '@angular/core';
import { connectData } from './connectData';
import { wordDataModel } from 'src/app/models/wordDataModel';

@Component({
  selector: 'app-level-connect',
  templateUrl: './level-connect.component.html',
  styleUrls: ['./level-connect.component.scss']
})
export class LevelConnectComponent { 
  buttonDisabledStates: boolean[] = [false, false, false, false, false, false, false, false];
  buttonMatchStates: boolean[] = [false, false, false, false, false, false, false, false];
  clickedButton: number[] = [];

  wordSet = connectData.translations

  onButtonClick(index: number) {
    console.log(this.clickedButton);
    this.buttonDisabledStates[index] = true;

    if(this.clickedButton.length == 0) {
      this.clickedButton[0] = index;
    } else if(this.clickedButton.length == 2) {
      this.clickedButton = [];
    } 
    else {
      this.clickedButton[1] = index;
    
      if(this.clickedButton[0] % 2 === 0 && this.clickedButton[1] % 2 === 0 || 
        this.clickedButton[0] % 2 !== 0 && this.clickedButton[1] % 2 !== 0) {
          this.buttonDisabledStates[this.clickedButton[0]] = false;
          this.buttonDisabledStates[this.clickedButton[1]] = false;
      }
    }
  }
}
