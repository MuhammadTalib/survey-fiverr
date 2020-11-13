import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mc-qs-option',
  templateUrl: './mc-qs-option.component.html',
  styleUrls: ['./mc-qs-option.component.css']
})
export class McQsOptionComponent implements OnInit {

  @Input() choices:string; 
  @Input() index:string; 

  @Input() showCheckBox:boolean; 

  @Output() choicesChange = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  changeOption(){
    console.log("chnge option")
    this.choicesChange.emit(this.choices);
  }

}
