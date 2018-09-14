import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSettingsComponent } from './skills-settings.component';

describe('SkillsSettingsComponent', () => {
  let component: SkillsSettingsComponent;
  let fixture: ComponentFixture<SkillsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
