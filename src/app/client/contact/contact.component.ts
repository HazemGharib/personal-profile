import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(contact => {
      this.contact = contact;
    });
  }

}
