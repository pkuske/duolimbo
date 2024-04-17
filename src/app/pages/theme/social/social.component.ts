import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
}
