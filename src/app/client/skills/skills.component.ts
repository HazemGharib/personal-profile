import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  dataReady: boolean;
  skillsList: any;

  constructor (private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsService.getSkills().subscribe(skills => {
        this.skillsList = skills;
        this.dataReady = true;
    });
  }

}
