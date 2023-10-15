import { Component } from '@angular/core';
import { PlanDetailsService } from 'src/app/Customer/services/plan-service/plan-details.service';

@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.css'],
  // providers:[PlanDetailsService]
})
export class AllPlansComponent {
  allPlans:Plans[]=[]
  constructor(private allPlanService:PlanDetailsService) { }
  
  ngOnInit(){
    this.allPlanService.get().subscribe((data) => {console.log("ALL PlanDetails: "+data);
    
    this.allPlans=data as Plans[]; 
    
    console.log("This. all plans",this.allPlans);
  });
  }
}
export class Plans{
    id!: number;
    name!: string;
    planFor!: string;
    price!: string;
    maxPersons!: number;
    createdAt!: string;
    modifiedAt!: string;
    validity!: string;
    durationType!: string;
    planType!: string;
    available!: boolean;

  constructor(){

  }
}