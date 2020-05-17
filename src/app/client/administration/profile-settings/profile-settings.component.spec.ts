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
import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfileService } from '../../profile/profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('ProfileSettingsComponent', () => {
  let component: ProfileSettingsComponent;
  let fixture: ComponentFixture<ProfileSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsComponent ],
      imports: [
        FormsModule,
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
        ProfileService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
