import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user.Model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  user1:user={
    name:"Sai Mohan",
    email:"mohansaip2001@gmail.com",
    phoneNumber:7847955970,
    dob:new Date(2001,10,10),
    houseNumber:"LB-307, Badagada Brit Colony",
    city:"Bhubaneswar",
    state:"Odisha",
    country:"India",
    pincode:751018,
    userType:"superUser",
    password:"Sai@2001"
  }
  userObservable=new Observable((observer)=>{
    observer.next(this.user1 as user)
  })
  constructor() { }
  
}
