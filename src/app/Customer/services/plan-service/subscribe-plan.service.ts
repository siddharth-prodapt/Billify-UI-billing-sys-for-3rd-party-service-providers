import { Injectable } from '@angular/core';
import { SubscribePlan } from './SubscribePlan.Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class SubscribePlanService {

  constructor(private http:HttpClient) { }

  public subscribePlan(body:SubscribePlan){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    console.log(body.id,body.subscribedPlanId)
    return this.http.post(CONSTANT.BASE_URL+"/user/subscribe",body,{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
