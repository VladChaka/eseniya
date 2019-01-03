import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.css']
})
export class SliderMainComponent {
    images = ['assets/images/tarnovo/t.jpg', 'assets/images/lida/pp.jpg', 'assets/images/lida/lida1.jpg'];
    constructor() { }
}
