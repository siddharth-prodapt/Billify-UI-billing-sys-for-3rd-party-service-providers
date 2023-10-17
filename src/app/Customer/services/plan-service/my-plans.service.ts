import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';
import { Plans } from './Plans.Model';

@Injectable({
  providedIn: 'root'
})
export class MyPlansService {

  constructor(private http:HttpClient) { }

  public getMyPlans(){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.get<Plans[]>(CONSTANT.BASE_URL+"/user/"+localStorage.getItem('uuid')+"/plans",{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
