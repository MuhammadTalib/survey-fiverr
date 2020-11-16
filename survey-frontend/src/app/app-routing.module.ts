import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { MySurveyComponent } from './components/MySurvey/survey.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SurveyRecordComponent } from './components/survey-record/survey-record.component';
import { SurveyComponent } from './components/Survey/survey.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'MySurvey', component: MySurveyComponent },
  { path: 'Survey', component: SurveyComponent},
  { path: 'Profile', component: ProfileComponent },
  { path: 'CreateSurvey', component: CreateSurveyComponent },
  { path: 'SurveyRecord', component: SurveyRecordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
