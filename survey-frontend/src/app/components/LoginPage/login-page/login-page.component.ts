import { Component, OnInit } from '@angular/core';
import { HttphandlerService } from "../../../Services/HTTPServices/httphandler.service"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http:HttphandlerService) { }
  hide:Boolean = true;
  registered:Boolean= true
  email:string=""
  password:string=""

  ngOnInit(): void {
  }
  login(){
    this.http.apiPost('/user/login',{
      email:this.email,
      password:this.password
    }).subscribe((res:any)=>{
      localStorage.setItem("token",res.token)
      localStorage.setItem("userData",JSON.stringify(res.user))
    })
  }
  handleSignUpClick(){
    this.registered=false;
  }
}
