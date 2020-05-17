import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
import { SkillsService } from './skills.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
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
        SkillsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
