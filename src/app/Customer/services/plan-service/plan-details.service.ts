import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';
import { Plans } from './Plans.Model';

@Injectable({
  providedIn: 'root'
})
export class PlanDetailsService {
  

 
  constructor(private http:HttpClient) { }

  public getPlans(){
    return this.http.get<Plans[]>(CONSTANT.BASE_URL+"/user/plans",{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')}});
  }
}
