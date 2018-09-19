import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WorkExperienceDialogComponent } from './dialogs/work-experience-dialog.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WorkExperienceDialogComponent, {
        width: '450px',
        data: {
            employer: '',
            role: '',
            responsibilities: '',
            isCurrent: false,
            startDate: new Date(),
            endDate: new Date(),
        }
    });

    dialogRef.afterClosed().subscribe(result => {
        this.experience.workExperience.push(result);
    });
  }

}
