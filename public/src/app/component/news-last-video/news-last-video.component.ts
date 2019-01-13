import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news-last-video',
  templateUrl: './news-last-video.component.html',
  styleUrls: ['./news-last-video.component.css']
})
export class NewsLastVideoComponent implements OnInit {
  safeURL: any;
    constructor(private _sanitizer: DomSanitizer){
     
  }

  ngOnInit() {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=2LPM9Xix2qc#action=share');
  }

}
