import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Count app';

  // state
  count = 0;

  handleCountUp() {
    this.count++;
  }

  handleCountDown() {
    if (this.count < 1 ) {
      return
    }
    this.count--;
  }
}
