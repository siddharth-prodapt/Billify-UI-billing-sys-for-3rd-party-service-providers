import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT } from 'src/app/config/constant/constant';
import { AllUsers } from './AllUsers.Model'

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  obs!:Observable<AllUsers[]>

  constructor(private http:HttpClient) { }
  
  public getAllUsers(){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    this.obs = this.http.get<AllUsers[]>(CONSTANT.BASE_URL+'/admin/user',{headers:{"Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
