import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Login } from './login.Model';
import { CONSTANT } from 'src/app/config/constant/constant';
import { Observable, Subscribable, Subscriber, Subscription } from 'rxjs';
import { SignUp } from './SignUp.Model';
import { LoginResponse } from './loginResponse.Model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDetails!:Observable<HttpResponse<LoginResponse>>
  
  constructor(private http:HttpClient) { }

  public post(body:Login){
    return this.http.post(CONSTANT.BASE_URL+"/login",body,{responseType:"text" as "json"})
  }
  public getToken(user:Login){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    console.log(user.email,user.password)
    this.userDetails =  this.http.post<LoginResponse>(CONSTANT.BASE_URL+"/auth/signin",user,{headers,observe:'response'})
    return this.userDetails
  }
  public signUpUser(user:SignUp){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    console.log(user.email,user.password,user.password,user.userType)
    return this.http.post(CONSTANT.BASE_URL+"/auth/signup",user,{headers,observe:'response'})
  }
  public forgetPassword(email:string){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    console.log(email)
    return this.http.post(CONSTANT.BASE_URL+"/auth/forgot-password/"+email,email,{headers,observe:'response'})
  }
  public changePassword(user:Login){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.post(CONSTANT.BASE_URL+"/auth/change-password",user,{headers,observe:'response'})
  }
}
