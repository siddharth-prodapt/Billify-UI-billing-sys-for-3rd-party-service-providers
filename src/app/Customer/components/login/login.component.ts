import { Component, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { login } from 'src/class';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent {
  inLogin:boolean=true
  username:string='';
  user:login=new login("","");
  constructor(private a1:AuthService,private router:Router,private elementRef:ElementRef){}

  send(){
    var error:boolean=false
    console.log(this.user)

    const emailError = document.getElementById('email_error')
    if(this.user.name?.trim() === ""){
      document.getElementById('email')?.setAttribute("class",'form-control is-invalid')
      if(emailError){
        emailError.innerHTML='Email cannot be Empty'
      }
      error=true
    }
    else if(this.user.name?.trim() === "q3"){
      document.getElementById('email')?.setAttribute("class",'form-control is-valid')
      if(emailError){
        emailError.innerHTML=''
      }
    }
    else{
      document.getElementById('email')?.setAttribute("class",'form-control is-invalid')
      if(emailError){
        emailError.innerHTML='Invalid Email'
      }
      error=true
    }

    const passwordError = document.getElementById('password_error')
    if(this.user.password?.trim() === ""){
      document.getElementById('password')?.setAttribute("class",'form-control is-invalid')
      if(passwordError){
        passwordError.innerHTML='Password cannot be empty'
      }
      error=true
    }
    else if(this.user.password?.trim() === "q3"){
      document.getElementById('password')?.setAttribute("class",'form-control is-valid')
    }
    else{
      document.getElementById('password')?.setAttribute("class",'form-control is-invalid')
      if(passwordError){
        passwordError.innerHTML='Invalid Password'
      }
      error=true
    }
    if(error){
      this.setRoute(false)
    }
    else{
      this.setRoute(true)
    }
  }
  setRoute(isValidUser:boolean){
    if(isValidUser){
      this.router.navigate(["/dashboard/sai"])
    }
  }

  onInputBlur(input:any){
    input.removeAttribute("class",'is-invalid')
  }
   
}