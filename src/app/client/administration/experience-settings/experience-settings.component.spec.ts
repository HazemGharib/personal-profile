import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatProgressSpinnerModule,
  MatChipsModule,
  MatBadgeModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatStepperModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatCheckboxModule,
 } from '@angular/material';
import { ExperienceSettingsComponent } from './experience-settings.component';
import { ExperienceService } from '../../experience/experience.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExperienceSettingsComponent', () => {
  let component: ExperienceSettingsComponent;
  let fixture: ComponentFixture<ExperienceSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSettingsComponent ],
      imports: [
        HttpClientTestingModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatChipsModule,
        MatBadgeModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatStepperModule,
        MatDialogModule,
        MatSlideToggleModule,
      ],
      providers: [
        ExperienceService
      ]
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
