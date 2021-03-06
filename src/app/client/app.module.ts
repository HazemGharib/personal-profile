import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';

import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ProfileSettingsComponent } from './administration/profile-settings/profile-settings.component';
import { ContactSettingsComponent } from './administration/contact-settings/contact-settings.component';
import { ExperienceSettingsComponent } from './administration/experience-settings/experience-settings.component';
import { SkillsSettingsComponent } from './administration/skills-settings/skills-settings.component';
import { WorkExperienceDialogComponent } from './administration/experience-settings/dialogs/work-experience-dialog.component';
import { TrainingExperienceDialogComponent } from './administration/experience-settings/dialogs/training-experience-dialog.component';

import { SkillsService } from './skills/skills.service';
import { ProfileService } from './profile/profile.service';
import { ExperienceService } from './experience/experience.service';
import { ContactService } from './contact/contact.service';
import { AdministrationService } from './administration/administration.service';

import { AdminGuard } from './admin.guard';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

const oktaConfig = {
  issuer: `https://dev-317930.oktapreview.com/oauth2/default`,
  redirectUri: `${environment.oktaRedirectUri}`,
  clientId: `0oag7y0s0h7x7ao8t0h7`
};

const appRoutes: Routes = [
  { path: 'administration', component: AdministrationComponent, canActivate: [AdminGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  {
    path: 'administration',
    canActivate: [AdminGuard],
    redirectTo: '/administration',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'experience',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    redirectTo: '/contact',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/skills',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    ProfileComponent,
    ExperienceComponent,
    ContactComponent,
    SkillsComponent,
    AdministrationComponent,
    PageNotFoundComponent,
    ProfileSettingsComponent,
    ContactSettingsComponent,
    ExperienceSettingsComponent,
    SkillsSettingsComponent,
    WorkExperienceDialogComponent,
    TrainingExperienceDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(oktaConfig),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
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
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [WorkExperienceDialogComponent, TrainingExperienceDialogComponent],
  providers: [
    SkillsService,
    ProfileService,
    ExperienceService,
    ContactService,
    AdministrationService,
    AdminGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
