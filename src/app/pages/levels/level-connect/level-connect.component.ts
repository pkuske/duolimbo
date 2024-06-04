import { Component, OnInit } from '@angular/core';
import { connectData } from './connectData';
import { wordDataModel } from 'src/app/models/wordDataModel';

interface WordPair {
  dialect: string;
  dutch: string;
  selected: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-level-connect',
  templateUrl: './level-connect.component.html',
  styleUrls: ['./level-connect.component.scss']
})
export class LevelConnectComponent { 
  wordPairs: WordPair[] = [
    { dialect: 'verchet', dutch: 'vork', selected: false, matched: false },
    { dialect: 'mets', dutch: 'mes', selected: false, matched: false },
    { dialect: 'glaas', dutch: 'glas', selected: false, matched: false },
    { dialect: 'tleur', dutch: 'bord', selected: false, matched: false },
    // Add more words as needed
  ];

  selectedEnglishIndex: number | null = null;
  selectedDutchIndex: number | null = null;

  constructor() { }

  
  // buttonDisabledStates: boolean[] = [false, false, false, false, false, false, false, false];
  // buttonMatchStates: boolean[] = [false, false, false, false, false, false, false, false];
  // clickedButton: number[] = [];

  // wordSet = connectData.translations;

  // onButtonClick(index: number) {
  //   console.log(this.wordSet);
  //   console.log(this.clickedButton);
  //   this.buttonDisabledStates[index] = true;

  //   if(this.clickedButton.length == 0) {
  //     this.clickedButton[0] = index;
  //   } else if(this.clickedButton.length == 2) {
  //     this.clickedButton = [];
  //   } 
  //   else {
  //     this.clickedButton[1] = index;
    
  //     if(this.clickedButton[0] % 2 === 0 && this.clickedButton[1] % 2 === 0 || 
  //       this.clickedButton[0] % 2 !== 0 && this.clickedButton[1] % 2 !== 0) {
  //         this.buttonDisabledStates[this.clickedButton[0]] = false;
  //         this.buttonDisabledStates[this.clickedButton[1]] = false;
  //     }
  //   }
  // }
}
