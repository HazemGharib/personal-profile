import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

export interface TechnicalSkill {
  name: string;
  rating: number;
}
export interface NonTechnicalSkill {
  name: string;
  rating: number;
}
export interface LanguageSkill {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-skills-settings',
  templateUrl: './skills-settings.component.html',
  styleUrls: ['./skills-settings.component.css']
})
export class SkillsSettingsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  technicalSkills: TechnicalSkill[] = [
    { name: '.Net Stack', rating: 4.5 },
    { name: 'Node JS', rating: 4 },
    { name: 'Angular 2+', rating: 3.8 },
    { name: 'Agile', rating: 4.8 }
  ];
  nonTechnicalSkills: NonTechnicalSkill[] = [
    { name: 'Fast Learner', rating: 4.8 },
    { name: 'Hardworker', rating: 4.2 },
    { name: 'Creative', rating: 4 },
    { name: 'Self Motivated', rating: 4 }
  ];
  languageSkills: LanguageSkill[] = [
    { name: 'Arabic', rating: 5 },
    { name: 'English', rating: 4.8 },
    { name: 'German', rating: 2.5 },
    { name: 'French', rating: 2.5 }
  ];

  constructor() { }

  ngOnInit() {
  }


  addTechnicalSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.technicalSkills.push({ name: value.trim(), rating: 0 });
    }

    if (input) {
      input.value = '';
    }
  }

  removeTechnicalSkill(technicalSkill: TechnicalSkill): void {
    const index = this.technicalSkills.indexOf(technicalSkill);

    if (index >= 0) {
      this.technicalSkills.splice(index, 1);
    }
  }


  addNonTechnicalSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.nonTechnicalSkills.push({ name: value.trim(), rating: 0 });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeNonTechnicalSkill(nonTechnicalSkill: NonTechnicalSkill): void {
    const index = this.nonTechnicalSkills.indexOf(nonTechnicalSkill);

    if (index >= 0) {
      this.nonTechnicalSkills.splice(index, 1);
    }
  }


  addLanguageSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.languageSkills.push({ name: value.trim(), rating: 0 });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLanguageSkill(languageSkill: LanguageSkill): void {
    const index = this.languageSkills.indexOf(languageSkill);

    if (index >= 0) {
      this.languageSkills.splice(index, 1);
    }
  }
}
