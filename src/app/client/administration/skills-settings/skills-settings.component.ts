import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { Skills, TechnicalSkillEntry, NonTechnicalSkillEntry, LanguageSkillEntry } from './../../skills/skills';
import { SkillsService } from './../../skills/skills.service';

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

  dataReady: boolean;
  skills: Skills;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getSkills().subscribe(skills => {
      this.skills = skills;
      this.dataReady = true;
    });
  }


  addTechnicalSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.skills.technicalSkills.push({ name: value.trim(), rating: 0 });
    }

    if (input) {
      input.value = '';
    }
  }
  removeTechnicalSkill(technicalSkill: TechnicalSkillEntry): void {
    const index = this.skills.technicalSkills.indexOf(technicalSkill);

    if (index >= 0) {
      this.skills.technicalSkills.splice(index, 1);
    }
  }
  RaiseTechnicalSkill(technicalSkill: TechnicalSkillEntry) {
    const index = this.skills.technicalSkills.indexOf(technicalSkill);
    this.skills.technicalSkills[index].rating += 1;
    console.log(this.skills.technicalSkills);
  }

  addNonTechnicalSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.nonTechnicalSkills.push({ name: value.trim(), rating: 0 });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  removeNonTechnicalSkill(nonTechnicalSkill: NonTechnicalSkillEntry): void {
    const index = this.skills.nonTechnicalSkills.indexOf(nonTechnicalSkill);

    if (index >= 0) {
      this.skills.nonTechnicalSkills.splice(index, 1);
    }
  }
  RaiseNonTechnicalSkill(nonTechnicalSkill: NonTechnicalSkillEntry) {
    const index = this.skills.nonTechnicalSkills.indexOf(nonTechnicalSkill);
    this.skills.nonTechnicalSkills[index].rating += 1;
    console.log(this.skills.nonTechnicalSkills);
  }

  addLanguageSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.languageSkills.push({ name: value.trim(), rating: 0 });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  removeLanguageSkill(languageSkill: LanguageSkillEntry): void {
    const index = this.skills.languageSkills.indexOf(languageSkill);

    if (index >= 0) {
      this.skills.languageSkills.splice(index, 1);
    }
  }
  RaiseLanguageSkill(languageSkill: LanguageSkillEntry) {
    const index = this.skills.languageSkills.indexOf(languageSkill);
    this.skills.languageSkills[index].rating += 1;
    console.log(this.skills.languageSkills);
  }
}
