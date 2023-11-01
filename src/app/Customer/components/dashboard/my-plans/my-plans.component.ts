import { Component } from '@angular/core';
import { Plans } from 'src/app/Customer/services/plan-service/Plans.Model';
import { MyPlansService } from 'src/app/Customer/services/plan-service/my-plans.service';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.css']
})
export class MyPlansComponent {
  myPlans!:Plans[]
  showPlan:boolean=false
  
  constructor(private myPlansService:MyPlansService){}

  ngOnInit(){
    this.myPlansService.getMyPlans().subscribe((data)=>{
      console.log(data)
      this.myPlans=data
      if(this.myPlans.length > 0){
        this.showPlan=true
      }
    })
  }
}
