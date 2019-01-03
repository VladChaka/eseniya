import { Component, OnInit } from '@angular/core';
import { FuncyboxMedia } from '../../../assets/js/jquery.fancybox-media';
import { Funcybox } from '../../../assets/js/jquery.fancybox';
import { FuncyboxButton } from '../../../assets/js/jquery.fancybox-buttons';
import * as $ from 'jquery';

@Component({
    selector: 'app-most-popular',
    templateUrl: './most-popular.component.html',
    styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.mediaGo()
    }

    mediaGo() {
        let funcybox = new Funcybox(),
            button = new FuncyboxButton(),
            media = new FuncyboxMedia();
        
        // funcybox.first($);
        // funcybox.fancybox($);
        // funcybox.helpers($);
        // funcybox.overlay($);
        // funcybox.transitions($);
        // funcybox.extend($);
        // button.buttonStart($);
        // console.log(media.mediaStart($));
    }

}
