import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSettingsComponent } from './contact-settings.component';

describe('ContactSettingsComponent', () => {
  let component: ContactSettingsComponent;
  let fixture: ComponentFixture<ContactSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
