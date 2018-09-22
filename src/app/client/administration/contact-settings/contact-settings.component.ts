import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ContactService } from './../../contact/contact.service';
import { Contact } from '../../contact/contact';

@Component({
  selector: 'app-contact-settings',
  templateUrl: './contact-settings.component.html',
  styleUrls: ['./contact-settings.component.css']
})
export class ContactSettingsComponent implements OnInit {
  dataReady: boolean;
  contact: Contact;

  @Output()
  change: EventEmitter<Contact> = new EventEmitter<Contact>();

  email: FormControl;
  phoneNumber: FormControl;
  country: FormControl;
  state: FormControl;
  line1: FormControl;
  line2: FormControl;
  facebookProfile: FormControl;
  linkedinProfile: FormControl;
  githubProfile: FormControl;


  constructor(private contactService: ContactService) {
    this.contactService.getContact().subscribe(contact => {
      this.contact = contact;
      this.email = new FormControl(this.contact.email, [Validators.required, Validators.email]);
      this.phoneNumber = new FormControl(this.contact.mobile, Validators.required);
      this.country = new FormControl(this.contact.currentAddress.country, Validators.required);
      this.state = new FormControl(this.contact.currentAddress.state, Validators.required);
      this.line1 = new FormControl(this.contact.currentAddress.line1, Validators.required);
      this.line2 = new FormControl(this.contact.currentAddress.line2, Validators.required);
      this.facebookProfile = new FormControl(this.contact.facebookAccount, Validators.required);
      this.linkedinProfile = new FormControl(this.contact.linkedinAccount, Validators.required);
      this.githubProfile = new FormControl(this.contact.githubAccount, Validators.required);

      this.dataReady = true;
    });
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
