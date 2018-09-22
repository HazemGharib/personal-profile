import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  valueChange: EventEmitter<Skills> = new EventEmitter<Skills>();

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
      this.valueChange.emit(this.skills);
    }

    if (input) {
      input.value = '';
    }
  }
  removeTechnicalSkill(technicalSkill: TechnicalSkillEntry): void {
    const index = this.skills.technicalSkills.indexOf(technicalSkill);

    if (index >= 0) {
      this.skills.technicalSkills.splice(index, 1);
      this.valueChange.emit(this.skills);
    }
  }
  RaiseTechnicalSkill(technicalSkill: TechnicalSkillEntry) {
    const index = this.skills.technicalSkills.indexOf(technicalSkill);
    if (this.skills.technicalSkills[index].rating + 1 > 10) {
      this.skills.technicalSkills[index].rating = 10;
    } else {
      this.skills.technicalSkills[index].rating += 1;
    }
    this.valueChange.emit(this.skills);
  }

  addNonTechnicalSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.nonTechnicalSkills.push({ name: value.trim(), rating: 0 });
      this.valueChange.emit(this.skills);
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
      this.valueChange.emit(this.skills);
    }
  }
  RaiseNonTechnicalSkill(nonTechnicalSkill: NonTechnicalSkillEntry) {
    const index = this.skills.nonTechnicalSkills.indexOf(nonTechnicalSkill);
    if (this.skills.nonTechnicalSkills[index].rating + 1 > 10) {
      this.skills.nonTechnicalSkills[index].rating = 10;
    } else {
      this.skills.nonTechnicalSkills[index].rating += 1;
    }
    this.valueChange.emit(this.skills);
  }

  addLanguageSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.languageSkills.push({ name: value.trim(), rating: 0 });
      this.valueChange.emit(this.skills);
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
      this.valueChange.emit(this.skills);
    }
  }
  RaiseLanguageSkill(languageSkill: LanguageSkillEntry) {
    const index = this.skills.languageSkills.indexOf(languageSkill);
    if (this.skills.languageSkills[index].rating + 1 > 10) {
      this.skills.languageSkills[index].rating = 10;
    } else {
      this.skills.languageSkills[index].rating += 1;
    }
    this.valueChange.emit(this.skills);
  }
}
