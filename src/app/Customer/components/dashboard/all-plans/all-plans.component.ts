import { Component } from '@angular/core';
import { Plans } from 'src/app/Customer/services/plan-service/Plans.Model';
import { PlanDetailsService } from 'src/app/Customer/services/plan-service/plan-details.service';

@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.css'],
  // providers:[PlanDetailsService]
})
export class AllPlansComponent {
  accountAccess:boolean=false
  allPlans:Plans[]=[]
  constructor(private allPlanService:PlanDetailsService) { }
  
  ngOnInit(){
    this.allPlanService.getPlans().subscribe((data) => {
      console.log("ALL PlanDetails: "+data);
      this.allPlans=data 
      console.log("This. all plans",this.allPlans);
    });
    if(localStorage.getItem('accountAccess') === 'true'){
      this.accountAccess = true
    }
  }
}