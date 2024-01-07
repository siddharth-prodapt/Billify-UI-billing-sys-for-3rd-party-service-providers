import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';
import { Member } from './Member.Model';

@Injectable({
  providedIn: 'root'
})
export class GetMemberService {

  constructor(private http:HttpClient) { }

  public getMemberUser(){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.get<Member[]>(CONSTANT.BASE_URL2+"/v2/user/"+localStorage.getItem('uuid')+"/member",{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')},observe:'response'})
  }
}
