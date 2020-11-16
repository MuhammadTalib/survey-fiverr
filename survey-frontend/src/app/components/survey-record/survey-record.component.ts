import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttphandlerService } from 'src/app/Services/HTTPServices/httphandler.service';

@Component({
  selector: 'app-survey-record',
  templateUrl: './survey-record.component.html',
  styleUrls: ['./survey-record.component.css']
})
export class SurveyRecordComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private router: Router ,private http:HttphandlerService) { }
  survey : any
  surveyRecords:[]
  rec:[]
  questions:[]
  ngOnInit(): void {
    this.survey = JSON.parse(this.route.snapshot.paramMap.get('survey'))
    this.http.apiGet(`/surveyResponse/getFromSurveyID/${this.survey._id}`).subscribe((res:any)=>{
      this.surveyRecords = res.survey
      const rec = res.survey
      if(res.survey.length) for(let sur=0;sur<res.survey.length;sur++){
        for(let qno=0;qno<res.survey[sur]?.questions.length;qno++){
          for(let opt=0;opt<res.survey[sur]?.questions[qno].options.length;opt++){
            if(res.survey[sur].type="mcqs"){
              if(res.survey[sur].questions[qno]?.options[opt].answer){
                if(!rec[0].questions[qno].options[opt]['count']){
                  console.log("not here")
                  rec[0].questions[qno].options[opt]['count']=0
                }
                rec[0].questions[qno].options[opt]['count'] = rec[0].questions[qno].options[opt]['count'] + 1
            
              }
            }else if(res.survey[sur].type="agreedisagree"){
              if(res.survey[sur].questions[qno]?.options[0]){
                if(!rec[0].questions[qno].options[0]['count']){
                  console.log("not here")
                  rec[0].questions[qno].options[0]={option:'Agree'}
                  rec[0].questions[qno].options[0]['count']=0
                }
                rec[0].questions[qno].options[0]['count'] = rec[0].questions[qno].options[0]['count'] + 1
              }else{
                if(!rec[0].questions[qno].options['count']){
                  console.log("not here")
                  rec[0].questions[qno].options['option']='Disagree'
                  rec[0].questions[qno].options['count']=0
                }
                rec[0].questions[qno].options['count'] = rec[0].questions[qno].options['count'] + 1
              }
            }
            
          }
        }
      }
      console.log("rec",rec)
      this.rec = rec
      
      
      // for(let i=0;i<res.survey[0].questions.length;i++){
      //   let rec={
      //     title:res.survey[0].questions[i].title,
      //     options:{...res.survey[0].questions[i].options,count:0}
      //   }
      //   for(let j=0;j<res.survey[0].questions[i].options.length;j++){
      //     for(let k=0;k<res.survey;k++){
      //       if(res.survey[k].questions[i].options[j].answer===true){
      //         rec.options[j].count++
      //         console.log("dwd",res.survey[k].questions[i].options[j].answer)
      //       }
      //     }
      //   }
      //   console.log("rec",rec)
      // }
    })

  }
  round(r){
    return Math.round(r*100)/100
  }

}
