import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SurveyComponent } from './components/Survey/survey/survey.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Survey', component: SurveyComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'CreateSurvey', component: CreateSurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
