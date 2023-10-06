import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login } from 'src/class';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public post(l1:login){

    return this.http.post("",l1,{responseType:"text" as "json"})
  }
  // public post(url:string,data:any){
  //   return this.http.post(url,data)
  // }
}
