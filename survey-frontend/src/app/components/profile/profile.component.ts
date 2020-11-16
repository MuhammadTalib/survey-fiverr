import { Component, OnInit } from '@angular/core';
import { HttphandlerService } from 'src/app/Services/HTTPServices/httphandler.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http:HttphandlerService) { }
  user:{}
  hide:true
  ngOnInit(): void {
    let userData = JSON.parse(localStorage.getItem('userData'))
    this.user = {
      name:userData.name,
      _id:userData._id,
      email:userData.email
    }
  }
  updateUser(){
    this.http.apiPost('/users/me',this.user).subscribe((res:any)=>{
      
    })
  }

}
