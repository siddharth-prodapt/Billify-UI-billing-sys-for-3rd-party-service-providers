import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from '../../services/auth-service/SignUp.Model';
import { signup } from 'src/class';
import { AuthService } from '../../services/auth-service/auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:signup=new signup("","","","","")
  users:SignUp=new SignUp()
  spinner:boolean=false
  constructor(private router:Router,private authService:AuthService){ }
  ngOnInit(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = Array.from(tooltipTriggerList)
    for(const tooltipTriggerEl of tooltipList){
      new bootstrap.Tooltip(tooltipTriggerEl)
    }
  }
  signUp(){
    this.spinner = true
    this.users.name = this.user.name as string
    this.users.email = this.user.email as string
    this.users.userType = this.user.userType as string
    this.users.password = this.user.password as string
    this.authService.signUpUser(this.users).subscribe(
      (data)=>{
        console.log(data)
        this.spinner=false
      },
      (error)=>{
        
      }
    )
  }
  validate(){
    console.log('inside validate') 
    console.log(this.user)
    this.setRoute(true)
  }
  setRoute(isValidUser:boolean){
    if(isValidUser){
      this.router.navigate(["/login"])
    }
  }
}
