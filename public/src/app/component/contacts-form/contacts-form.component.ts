import { Component, OnInit } from '@angular/core';

import { ContaktService } from '../../service/contakt.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {

  constructor(private contaktService: ContaktService) { }

  ngOnInit() {
  }

  send(name, phone, email, message) {
    let data = {
      name: name,
      phone: phone,
      email: email,
      message: message
    }
    this.contaktService.add(data).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}