import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';
import { Plans } from '../../components/dashboard/all-plans/all-plans.component';

@Injectable({
  providedIn: 'root'
})
export class PlanDetailsService {
  

 
  constructor(private http:HttpClient) { }

  public getPlans(){
    return this.http.get<Plans[]>(CONSTANT.BASE_URL+"/plan",{headers:{ "Authorization": "Bearer "+CONSTANT.TEST_TOKEN}} );
  }
}
