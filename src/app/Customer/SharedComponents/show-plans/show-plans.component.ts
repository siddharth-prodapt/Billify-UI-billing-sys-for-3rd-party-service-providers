import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Plans } from '../../services/plan-service/Plans.Model';
import { SubscribePlan } from '../../services/plan-service/SubscribePlan.Model';
import { SubscribePlanService } from '../../services/plan-service/subscribe-plan.service';
import { Member } from '../../services/member-services/Member.Model';
import { GetMemberService } from '../../services/member-services/get-member.service';


@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent implements OnInit{
  @Input() plan:Plans|undefined
  @Input() myPlan:boolean=false
  @Input() accountAccess!:boolean
  // @ViewChild('card-hover',{read:ElementRef}) myCard!:ElementRef

  subscribePlan:SubscribePlan=new SubscribePlan()
  planId:string|undefined
  pid:string|undefined
  
  members!:Member[]
  newMembers!:any[]
  allotedMembers!:Member[]
  count:number=0
  parentName:string|null=localStorage.getItem('name')

  subscribeBtn!:boolean
  image:string=""

  constructor(private s1:SubscribePlanService,private renderer:Renderer2,private getMemSer:GetMemberService){ }

  ngOnInit(): void {
    if(this.myPlan){
      this.subscribeBtn = false
      this.image = "./../../../../assets/images/"+this.plan?.imgUrl
    }
    else{
      // console.log('on init')

      this.subscribeBtn = true
      this.planId='#myPlans'+this.plan?.id
      this.pid='myPlans'+this.plan?.id
      this.image = "./../../../../assets/images/"+this.plan?.imgUrl
      console.log('img'+this.image)
      // console.log(this.planId,this.pid)

      //Fetch Members
      this.getMemSer.getMemberUser().subscribe(
        (response)=>{
          // console.log(response.body)
          this.members = response.body as Member[]
          this.newMembers = this.members.map(obj=>({...obj,selected:false}))
          console.log(this.newMembers)
        }
      )
    }
  }

  onChangeCheckbox(checkbox:any){
    console.log(checkbox.selected)
    checkbox.selected=!checkbox.selected
    if(checkbox.selected){
      this.count=this.count+1;
    }
    else{
      this.count=this.count-1;
    }
  }

  subscribe(id:string|undefined){

    console.log(id)
    console.log(this.newMembers)
    this.allotedMembers = this.newMembers.filter((obj)=>obj.selected) as Member[]
    console.log(this.allotedMembers)
    this.subscribePlan.membersList = this.allotedMembers
    this.subscribePlan.parentUuid = localStorage.getItem('uuid') as string
    // console.log(localStorage.getItem('uuid'))
    // this.subscribePlan.id=localStorage.getItem('uuid') as string
    // this.subscribePlan.subscribedPlanId=id as string
    this.s1.subscribePlan(id as string,this.subscribePlan).subscribe((data)=>{
      console.log(data)
      
    },
    
    )
  }
  
}