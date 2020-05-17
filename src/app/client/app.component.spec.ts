import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { inject } from '@angular/core';
describe('AppComponent', () => {
  const appRoutes: Routes = [
    { path: '**', redirectTo: '/', }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes)
      ],
      providers: [
        OktaAuthService
      ]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
