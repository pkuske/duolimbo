import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  constructor(private router: Router){}
  goToOverview(value: string) {
    let url = ['/', value] ;
    this.router.navigate(url);  
  }
}
