import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/Services/user-data.service';
import { HttphandlerService } from "../../../Services/HTTPServices/httphandler.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private http:HttphandlerService,
    private userDataService : UserDataService,
    private router: Router
    ) { }

  displayedColumns: string[] = ['Survey_Number', 'Title', 'no_of_questions', 'SurveyStartDate', 'SurveyEndDate','participate'];

  limit = 10;
  skip = 0;
  count = 0
  totalDocCounts=0
  surveys=[]
  userData = null

  ngOnInit(): void {
    this.userDataService.userData.subscribe(data => {
      this.userData = data;
    })
    this.http.apiGet(`/survey/getAll`).subscribe((res:any)=>{
      this.totalDocCounts = res.count
      this.surveys = res.surveys
      this.count = res.count
    })
  }
  getTime(date){
    var d=new Date(date);
    return d.getMonth()+'/'+d.getDate()+'/'+d.getFullYear()+'   '+d.getHours()+":"+d.getMinutes();
  }
  handlePage(event){
  }
  checkSignInFirst(survey:any){
    if(this.userData){
      this.mockSurvey(survey)
    }else{
      this.router.navigate(['/login'])
    }
  }
  mockSurvey(survey:any){
    this.router.navigate(['/Survey',{survey:JSON.stringify(survey)}], );
  }

}
