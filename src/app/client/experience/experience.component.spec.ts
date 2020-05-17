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
import { ExperienceComponent } from './experience.component';
import { ExperienceService } from './experience.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceComponent ],
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
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
