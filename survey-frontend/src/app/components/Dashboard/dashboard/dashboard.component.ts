import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttphandlerService } from "../../../Services/HTTPServices/httphandler.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttphandlerService,private router: Router) { }

  limit = 10;
  skip = 0;
  count = 0
  totalDocCounts=0
  surveys=[]

  ngOnInit(): void {
    this.http.apiGet(`/survey/getAll/${this.limit}/${this.skip}`).subscribe((res:any)=>{
      this.totalDocCounts = res.count
      this.surveys = res.surveys
      this.count = res.count
    })
  }
  handlePage(event){
    console.log("event",event)
  }
  mockSurvey(survey:any){
    this.router.navigate(['/Survey',{survey:JSON.stringify(survey)}], );
  }

}
