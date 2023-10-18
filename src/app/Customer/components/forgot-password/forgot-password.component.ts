import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { NgForm } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Login } from '../../services/auth-service/login.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  animations: [
    trigger('leftRightAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-60%)' }),
        animate('0.5s ease', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ]
})
export class ForgotPasswordComponent {
  
  email:string=""
  otp:string=""
  pass:string=""
  cnfPass:string=""
  user:Login=new Login("","")
  user2:Forgot = new Forgot()
  constructor(private authService:AuthService,private router:Router){ }

  sendOTP(){
    console.log(this.email)
    this.authService.forgetPassword(this.email).subscribe(
      (response)=>{
        if(response.status === 200){
          this.user2 = response.body as Forgot
          console.log(this.user2)
        }
      }
    )
    console.log(this.user2)
  }
  validate(){
    console.log(this.otp)
    if(this.user2.otp === this.otp){
      console.log(true)
    }
  }
  changePass(){
    console.log(this.pass)
    this.user.email = this.user2.email
    this.user.password = this.pass
    console.log(this.user)
    this.authService.changePassword(this.user).subscribe(
      (response)=>{
        console.log(response)
        setInterval(()=>{
          this.router.navigate(['/login'])
        },2000)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  ngOnInit(){

  }
}
class Forgot{
  email!:string
  otp!:string

  constructor(){ }
}