import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSettingsComponent } from './experience-settings.component';

describe('ExperienceSettingsComponent', () => {
  let component: ExperienceSettingsComponent;
  let fixture: ComponentFixture<ExperienceSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
