import { Component, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { NgForm } from '@angular/forms';
import { Login } from '../../services/auth-service/login.Model';
import { Router, RouterLink } from '@angular/router';
import { LoginResponse } from '../../services/auth-service/loginResponse.Model';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('rightLeftAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
  providers:[AuthService],
})
export class LoginComponent {
  inLogin:boolean=true
  spinner:boolean=false
  message!:string
  username:string='';
  loginResponse:LoginResponse = new LoginResponse()
  user:Login=new Login("","");
  constructor(private a1:AuthService,private router:Router){}

  ngOnInit(){
    
  }
  login(loginForm:NgForm){
    this.spinner=true
    this.a1.getToken(this.user).subscribe(
      (response)=>{
        if(response.status===200){
          this.a1.userDetails.subscribe(
            (response)=>{
              console.log(response)
            }
          )
          this.loginResponse = response.body as LoginResponse
          localStorage.setItem('token',this.loginResponse.token)
          localStorage.setItem('loggedIn','true')
          localStorage.setItem('name',this.loginResponse.name)
          localStorage.setItem('uuid',this.loginResponse.uuid as string)
          localStorage.setItem('accountAccess',this.loginResponse.accountAccess)
          console.log(localStorage.getItem('token'))
          this.spinner=false
          this.message="Login Successfull 🎉. Re-directing to Dashboard!"
          this.show()
          
        }
      },
      (error)=>{
        if(error.status===403){
          this.spinner=false
          this.message="Incorrect EmailId & Password."
          this.show()
          loginForm.reset()
        }
        else{
          this.spinner=false
          this.message="Error in Connection."
          this.show()
        }
      }
    )
  }
  showToast:boolean=false
  closeToast() {
    this.showToast = false;
  }

  show() {
    this.showToast = true;
    setTimeout(()=>{
      this.closeToast()
      if(this.loginResponse.role === 'ROLE_USER'){
        this.router.navigate(["/dashboard/"+this.loginResponse.name])
      }else if(this.loginResponse.role === 'ROLE_ADMIN'){
        localStorage.setItem('admin','true')
        this.router.navigate(["/admin/"])
      }
    },2000)
  }
  // show(){
  //   this.showToast
  // }
}