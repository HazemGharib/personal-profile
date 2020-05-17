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
import { AdministrationComponent } from './administration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdministrationService } from './administration.service';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ContactSettingsComponent } from './contact-settings/contact-settings.component';
import { SkillsSettingsComponent } from './skills-settings/skills-settings.component';
import { ExperienceSettingsComponent } from './experience-settings/experience-settings.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OktaAuthService } from '@okta/okta-angular';

describe('AdministrationComponent', () => {
  let component: AdministrationComponent;
  let fixture: ComponentFixture<AdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdministrationComponent,
        ProfileSettingsComponent,
        ContactSettingsComponent,
        SkillsSettingsComponent,
        ExperienceSettingsComponent
       ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
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
        MatSlideToggleModule
      ],
      providers: [
        AdministrationService,
        OktaAuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
