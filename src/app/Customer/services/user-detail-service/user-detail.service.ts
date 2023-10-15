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
    adhaarNumber:779297278124,
    dob:"10/11/2001",
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
