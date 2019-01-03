import { Component, OnInit } from '@angular/core';
import { Camera } from '../../../assets/js/camera';
import * as $ from 'jquery';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // document.write('<script src="assets/js/camera.js"></script>');
        document.write('<script src="assets/js/jquery.mobile.customized.min.js"></script>');
        this.startSlider();
    }

    startSlider() {
        let camera = new Camera();
        camera.camera($);
        camera.cameraPause($);
        camera.cameraResume($);
        camera.cameraStop($);

        // $('#camera').camera({
        //     autoAdvance: true,
        //     fx: 'curtainSliceRight',
        //     time: 2000,
        //     pagination: false,
        //     navigation: false,
        //     thumbnails: true,
        //     height: '41.4583%',
        //     loader: 'none',
        //     minHeight: '300px'
        // });
    }

}
