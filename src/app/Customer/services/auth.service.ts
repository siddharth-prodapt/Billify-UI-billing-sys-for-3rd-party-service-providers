import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login } from 'src/class';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  public post(body:login){
    return this.http.post(CONSTANT.BASE_URL+"/login",body,{responseType:"text" as "json"})
  }
}
