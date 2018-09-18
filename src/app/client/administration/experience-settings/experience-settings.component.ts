import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-settings',
  templateUrl: './experience-settings.component.html',
  styleUrls: ['./experience-settings.component.css']
})
export class ExperienceSettingsComponent implements OnInit {

  experience = {
    workExperience: [
        {
            employerName: 'NabdaCare',
            role: 'Dot Net Developer',
            responsibilities: 'Lorem Ipsum',
            isCurrent: false,
            startDate: new Date(2018, 9, 18),
            endDate: new Date(2018, 9, 18),
        },
        {
            employerName: 'Service Rocket',
            role: 'Agile Developer',
            responsibilities: 'Lorem Ipsum',
            isCurrent: true,
            startDate: new Date(2018, 9, 18),
            endDate: new Date(2018, 9, 18)
        }
    ],
    trainingExperience: [
        {
            organizationName: 'Information Technology Inistitiute [ITI]',
            field: 'Professional Developer Track [.Net Full Stack]',
            startDate: new Date(2018, 9, 18),
            endDate: new Date(2018, 9, 18)
        },
        {
            organizationName: 'IBM Egypt',
            field: 'Customer Relationship Management [CRM]',
            startDate: new Date(2018, 9, 18),
            endDate: new Date(2018, 9, 18)
        }
    ]
};

  constructor() { }

  ngOnInit() {
  }

}
