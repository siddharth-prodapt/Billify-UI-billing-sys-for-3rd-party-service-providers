import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ToogleAccessService {

  constructor(private http:HttpClient) { }

  public toogleAccess(uuid:string){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.post(CONSTANT.BASE_URL+"/admin/toggle-account/user/"+uuid,'',{headers:{"Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
