import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
@Component({
  selector: 'app-my-bills',
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.css']
})
export class MyBillsComponent {
  username:any
  names:string[]=[]
  constructor(private route:ActivatedRoute,private d:DashboardComponent){}
  ngOnInit(){
    this.d.myObservable.subscribe((value)=>{
      this.username = value
    })
  }
}
