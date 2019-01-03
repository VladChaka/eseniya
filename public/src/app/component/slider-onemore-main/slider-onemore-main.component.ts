import { Component, OnInit, ViewChild } from '@angular/core';
// import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-slider-onemore-main',
  templateUrl: './slider-onemore-main.component.html',
  styleUrls: ['./slider-onemore-main.component.css']
})
export class SliderOnemoreMainComponent implements OnInit {

    images : any  = [
        { 
            img: 'assets/images/page-1_img08.jpg',
            href: '',
            text: 'Test1',
            title: 'TEST1'
        },
        { 
            img: 'assets/images/page-1_img09.jpg',
            href: '',
            text: 'Test2',
            title: 'TEST2'
        },
        { 
            img: 'assets/images/page-1_img10.jpg',
            href: '',
            text: 'Test3',
            title: 'TEST3'
        },
    ];

    // @ViewChild('owlElement') owlElement: OwlCarousel


    // fun() {
    //     this.owlElement.next([200])
    //     console.log(this.owlElement);
        //duration 200ms
    // }

    constructor() { }

    ngOnInit() {
    //   this.fun();
    }

}
