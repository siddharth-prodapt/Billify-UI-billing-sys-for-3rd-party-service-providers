import { Component, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { NgForm } from '@angular/forms';
import { Login } from '../../services/auth-service/login.Model';
import { Router, RouterLink } from '@angular/router';
import { LoginResponse } from '../../services/auth-service/loginResponse.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent {
  inLogin:boolean=true
  spinner:boolean=false
  succmessage:string=""
  errmessage:string=""
  username:string='';
  loginResponse:LoginResponse = new LoginResponse("","","","","")
  user:Login=new Login("","");
  constructor(private a1:AuthService,private router:Router){}

  ngOnInit(){
    
  }
  login(){
    this.spinner=true
    this.a1.getToken(this.user).subscribe(
      (response)=>{
        if(response.status===200){
          this.succmessage="login Successfull"
          this.loginResponse = response.body as LoginResponse
          localStorage.setItem('token',this.loginResponse.token)
          localStorage.setItem('loggedIn','true')
          localStorage.setItem('uuid',this.loginResponse.uuid as string)
          // localStorage.setItem('')
          console.log(localStorage.getItem('token'))
          this.spinner=false
          this.router.navigate(["/dashboard/"+this.loginResponse.name])
        }
        else if(response.status===201){
          this.errmessage="Incorrect EmailId & Password"
          this.spinner=false
        }
      },
      (error)=>{
        this.errmessage="Error in Connection."
        this.spinner=false
      }
    )
  }
   
}