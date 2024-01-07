import { Injectable } from '@angular/core';
import { Member } from './Member.Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AddMemberService {
  constructor(private http:HttpClient) { }

  public addMemberUser(memberUser:Member){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    console.log(memberUser.name,memberUser.phoneNumber,memberUser.parentUuid)
    return this.http.post(CONSTANT.BASE_URL2+"/v2/user/"+memberUser.parentUuid+"/member",memberUser,{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')},observe:'response'})
  }
}
