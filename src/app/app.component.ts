import { Component } from '@angular/core';
import { PropertyWrite } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelFrontEnd';

  displayRegister = false;

  onPress() {
    this.displayRegister = true;
  }


}
