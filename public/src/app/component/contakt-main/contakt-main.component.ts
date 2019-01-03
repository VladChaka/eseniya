import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-contakt-main',
  templateUrl: './contakt-main.component.html',
  styleUrls: ['./contakt-main.component.css']
})
export class ContaktMainComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  send(email) {
    this.newsService.add({ email: email }).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

}
