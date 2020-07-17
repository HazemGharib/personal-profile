import { ProfileService } from './../profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  dataReady: boolean;
  contact: Contact;
  contactCardHeader: { profileHeadName: string; profileCurrentTitle: string; };

  constructor(private contactService: ContactService, private profileService: ProfileService) { }

  ngOnInit() {
    this.contactService.getResumeUrl().subscribe(url => {
      this.contact.resume = url;
    });
    this.contactService.getContact().subscribe(contact => {
      this.contact = contact;

      if (this.contactCardHeader === undefined || this.contactCardHeader === null) {
        this.profileService.getProfile().subscribe((profile) => {
          this.contactCardHeader = {
            profileHeadName: profile.profileHeadName,
            profileCurrentTitle: profile.profileCurrentTitle
          };

          this.dataReady = true;
        });
      } else {
        this.contactCardHeader = {
          profileHeadName: localStorage.getItem('profileHeadName'),
          profileCurrentTitle: localStorage.getItem('profileCurrentTitle')
        };

        this.dataReady = true;
      }
    });
  }

}
