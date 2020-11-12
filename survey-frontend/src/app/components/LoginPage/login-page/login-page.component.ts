import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
  hide:Boolean = true;
  registered:Boolean= true
  email:string=""
  password:string=""

  ngOnInit(): void {
  }
  login(){
    console.log("login clicked",this.email,this.password)
  }
  handleSignUpClick(){
    this.registered=false;
  }
}
