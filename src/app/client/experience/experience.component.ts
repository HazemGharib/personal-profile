import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  dataReady: boolean;
  experience: any;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getExperience().subscribe(experience => {
      this.experience = experience;
      this.dataReady = true;
    });
  }

}
