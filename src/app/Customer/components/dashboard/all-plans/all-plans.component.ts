import { Component } from '@angular/core';

@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.css']
})
export class AllPlansComponent {
  allPlans:Plans[] = [
    {id:1,name:"Plan-1",maxAllowed:6,price:399},
    {id:2,name:"Plan-2",maxAllowed:6,price:499},
    {id:3,name:"Plan-3",maxAllowed:6,price:599},
    {id:4,name:"Plan-4",maxAllowed:6,price:699},
    {id:5,name:"Plan-5",maxAllowed:6,price:799},
    {id:6,name:"Plan-6",maxAllowed:6,price:899}
  ]

}
export class Plans{
  id:number
  name:string
  maxAllowed:number
  price:number
  constructor(id:number,name:string,maxAllowed:number,price:number){
    this.id = id
    this.name = name
    this.maxAllowed = maxAllowed
    this.price = price
  }
}