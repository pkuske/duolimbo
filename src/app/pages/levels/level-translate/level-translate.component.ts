import { Component } from '@angular/core';
import { LevelBaseComponent } from '../level-base/level-base.component';

@Component({
  selector: 'app-level-translate',
  templateUrl: './level-translate.component.html',
  styleUrls: ['./level-translate.component.scss']
})
export class LevelTranslateComponent {

  selectedWords: string[] = [];
  clickedWords: string[] = ['eten', 'pannenkoeken', 'koekjes', 'Kunnen', 'morgen', 'vanavond', 'buiten',  'we', 'snijdt'];
  answer: string[] = ['Kunnen', 'we', 'vanavond', 'pannenkoeken', 'eten'];

  constructor(private lvl: LevelBaseComponent) {}

  onWordSelect(word: string, index: number) {
    // Remove word from word-selection and add it to clicked-words
    this.selectedWords.splice(index, 1);
    this.clickedWords.push(word);

  }

  onWordUnselect(word: string, index: number) {
    // Remove word from clicked-words and add it back to word-selection
    this.clickedWords.splice(index, 1);
    this.selectedWords.push(word);

    if(this.selectedWords.join('') == this.answer.join('')) {
      this.lvl.showFooter = true;
      this.lvl.addProgress();
    } else {
      this.lvl.showFooter = false;
    }
  }
}
