import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

  setLevel(level: number) {
    localStorage.setItem('currentLevel', level.toString());
  }
}
