import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http:HttpClient) { }

  public getDashboardData(){
    return this.http.get(CONSTANT.BASE_URL+"/admin/dashboard",{headers:{"Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
