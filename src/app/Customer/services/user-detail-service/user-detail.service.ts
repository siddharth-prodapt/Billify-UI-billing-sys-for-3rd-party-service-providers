import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user.Model';
import { HttpClient } from '@angular/common/http';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { }

  getUserDetails(User:user){
    return this.http.get(CONSTANT.BASE_URL+"/user/"+localStorage.getItem('uuid'),{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')}})
  }

  user1:user={
    name:"Sai Mohan",
    email:"mohansaip2001@gmail.com",
    // dob:new Date(),
    phoneNo:"",
    houseNumber:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
    userType:"superUser",
  }
  userObservable=new Observable((observer)=>{
    observer.next(this.user1 as user)
  })
  
}
