import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { NgForm, NgModel } from '@angular/forms';
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
  validateOTPForm:boolean=false
  changePasswordForm:boolean=false
  name:string=""

  user:Login=new Login("","")
  user2:Forgot = new Forgot()

  constructor(private authService:AuthService,private router:Router){ }

  sendOTP(verifyEmail:NgForm){
    console.log(verifyEmail)
    this.authService.forgetPassword(this.email).subscribe(
      (response)=>{
        if(response.status === 200){
          this.validateOTPForm = true 
          this.user2 = response.body as Forgot
          console.log(this.user2)
        }
      },
      (error)=>{
        verifyEmail.resetForm()
      }
    )
  }
  validateOTP(validateOTPForm:NgForm){
    // console.log('validate called')
    // console.log(this.otp)
    if(this.user2.otp === this.otp){
      this.changePasswordForm = true
    }
    else{
      console.log('Invalid OTP send Again!')
      this.validateOTPForm=false
      validateOTPForm.resetForm()
    }
  }
  changePass(changePasswordForm:NgForm){
    console.log(this.pass)
    this.user.email = this.user2.email
    this.user.password = this.pass
    console.log(this.user)
    this.authService.changePassword(this.user).subscribe(
      (response)=>{
        console.log(response)
        setInterval(()=>{
          this.router.navigate(['login'])
        },2000)
      },
      (error)=>{
        this.validateOTPForm=false
        console.log('Error in Connection.Please try Again')
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