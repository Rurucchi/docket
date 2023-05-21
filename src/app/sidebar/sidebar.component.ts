import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // possible colors
  primaryColor = '#3f51b5';
  accentColor = '#ff4081';
  warnColor = '#f44336';

  currentColor = '#3f51b5';

  changeColor(color: string) {
    this.currentColor = color;
    console.log(this.currentColor);
  }
}
