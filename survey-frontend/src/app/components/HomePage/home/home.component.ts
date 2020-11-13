import { Component, OnInit } from '@angular/core';
import { HttphandlerService } from "../../../Services/HTTPServices/httphandler.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttphandlerService) { }

  ngOnInit(): void {
  }

  logout(){
    this.http.apiPost('/users/logout',{}).subscribe((res:any)=>{
      localStorage.clear();
    })
  }

}
