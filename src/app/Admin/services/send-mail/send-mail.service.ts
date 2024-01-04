import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mailRequest } from './sendMailRequest.Model';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http:HttpClient) { }

  public send(body:mailRequest){
    return this.http.post(CONSTANT.BASE_URL+"/admin/reminder-mail",body,{headers:{"Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
