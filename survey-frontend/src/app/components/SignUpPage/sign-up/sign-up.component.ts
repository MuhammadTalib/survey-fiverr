import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttphandlerService } from "../../../Services/HTTPServices/httphandler.service"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide:Boolean = true;
  Username:string=""
  email:string=""
  password:string=""
  confirmpassword=""
  registered:Boolean= false

  constructor(private http:HttphandlerService) { }

  ngOnInit(): void {
  }
  signUp(){
    this.http.apiPost('/user/create',{
      name:this.Username,
      email:this.email,
      password:this.password
    }).subscribe((res:any)=>{
      console.log("res",res)
    })
  }
  handleLoginClick(){
    this.registered = true
  }

}
