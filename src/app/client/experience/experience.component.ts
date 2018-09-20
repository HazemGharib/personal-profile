import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  dataReady: boolean;
  experience: Experience;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getExperience().subscribe(experience => {
      this.experience = experience;
      this.dataReady = true;
    });
  }

}
