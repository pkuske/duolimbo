import { Component } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent {
  numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
}
