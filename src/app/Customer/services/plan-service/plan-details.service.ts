import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class PlanDetailsService {
  


  constructor(private http:HttpClient) { }

  public get(){
    return this.http.get(CONSTANT.BASE_URL+"/plan",{headers:{ "Authorization": "Bearer "+CONSTANT.TEST_TOKEN}} );
  }
}
