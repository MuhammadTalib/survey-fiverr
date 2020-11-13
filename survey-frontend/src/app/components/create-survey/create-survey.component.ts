import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttphandlerService } from "../../Services/HTTPServices/httphandler.service"

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  title:string=""
  description:string=""
  user:{}
  choices=null
  surveyType:string = ""
  addChoice(){
    this.choices.push({option:'Option '+(this.choices.length+1)})
  }
  radioChange(event){
    if(event.value==='mcqs'){
      this.choices = [{option:'Option 1'},{option:'Option 2'}]
    }else{
      this.choices=null
    }
  }
  saveSurvey(){
    let data={
      title:this.title,
      description:this.description,
      type:this.surveyType
    }
    this.user && (data['createdBy'] = this.user)
    this.choices && (data['options'] = this.choices)
    this.http.apiPost('/survey/create',data).subscribe((res:any)=>{
      this.title=""
      this.description=""
      this.choices=null
      this.surveyType = ""
    })
  }
  constructor(private http:HttphandlerService) {
    let userData = JSON.parse(localStorage.getItem('userData'))
    this.user = {
      name:userData.name,
      _id:userData._id
    }
    // const today = new Date();
    // const month = today.getMonth();
    // const year = today.getFullYear();

    // this.campaignOne = new FormGroup({
    //   start: new FormControl(new Date(year, month, 13)),
    //   end: new FormControl(new Date(year, month, 16))
    // });

    // this.campaignTwo = new FormGroup({
    //   start: new FormControl(new Date(year, month, 15)),
    //   end: new FormControl(new Date(year, month, 19))
    // });
  }
  
  ngOnInit(): void {
  }

}
