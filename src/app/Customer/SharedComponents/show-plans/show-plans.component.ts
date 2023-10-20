import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Plans } from '../../services/plan-service/Plans.Model';
import { SubscribePlan } from '../../services/plan-service/SubscribePlan.Model';
import { SubscribePlanService } from '../../services/plan-service/subscribe-plan.service';


@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent implements OnInit{
  @Input() plan:Plans|undefined
  @Input() myPlan:boolean=false
  // @ViewChild('card-hover',{read:ElementRef}) myCard!:ElementRef

  subscribePlan:SubscribePlan=new SubscribePlan()
  planId:string|undefined
  pid:string|undefined

  subscribeBtn!:boolean
  image:string=""

  constructor(private s1:SubscribePlanService,private renderer:Renderer2){ }

  ngOnInit(): void {
    if(this.myPlan){
      this.subscribeBtn = false
    }
    else{
      // console.log('on init')
      this.subscribeBtn = true
      this.planId='#myPlans'+this.plan?.id
      this.pid='myPlans'+this.plan?.id
      this.image = "./../../../../assets/images/"+this.plan?.imgUrl
      // console.log(this.planId,this.pid)
    }
  }
  subscribe(id:string|undefined){
    // console.log(id)
    // console.log(localStorage.getItem('uuid'))
    this.subscribePlan.id=localStorage.getItem('uuid') as string
    this.subscribePlan.subscribedPlanId=id as string
    this.s1.subscribePlan(this.subscribePlan).subscribe((data)=>{
      console.log(data)
    }
    )
  }
}