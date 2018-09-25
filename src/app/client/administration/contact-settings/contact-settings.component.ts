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
  valueChange: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {
    this.contactService.getContact().subscribe(contact => {
      this.contact = contact;
      this.dataReady = true;
    });
  }

  ngOnInit() {
  }

  onContactChange() {
    this.valueChange.emit(this.contact);
  }

  getErrorMessage(control) {
    // switch (control) {
    //   case 'email':
    //     return this.email.hasError('required') ?
    //       'You must enter a value' :
    //       this.email.hasError('email') ?
    //         'Not a valid email' :
    //         '';
    //   case 'phoneNumber':
    //     return this.phoneNumber.hasError('required') ?
    //       'You must enter a value' :
    //       this.phoneNumber.hasError('minlength') ?
    //         'Not a valid phone number' :
    //         '';
    //   case 'country':
    //     return this.country.hasError('required') ?
    //       'You must enter a value' :
    //       '';
    //   case 'state':
    //     return this.state.hasError('required') ?
    //       'You must enter a value' :
    //       '';
    //   case 'line1':
    //     return '';
    //   case 'line2':
    //     return '';
    //   case 'facebookProfile':
    //     return this.facebookProfile.hasError('required') ?
    //       'You must enter a value' :
    //       '';
    //   case 'linkedinProfile':
    //     return this.linkedinProfile.hasError('required') ?
    //       'You must enter a value' :
    //       '';
    //   case 'githubProfile':
    //     return this.githubProfile.hasError('required') ?
    //       'You must enter a value' :
    //       '';
    //   default:
    //     break;
    // }
  }
}
