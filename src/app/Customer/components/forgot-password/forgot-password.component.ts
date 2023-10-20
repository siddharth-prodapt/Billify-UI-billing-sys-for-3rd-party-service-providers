import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { NgForm, NgModel } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Login } from '../../services/auth-service/login.Model';
import { Router } from '@angular/router';

declare var bootstrap: any;

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
  spinner:boolean=false
  message:string=""
  user:Login=new Login("","")
  user2:Forgot = new Forgot()

  constructor(private authService:AuthService,private router:Router){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = Array.from(tooltipTriggerList)
    for(const tooltipTriggerEl of tooltipList){
      new bootstrap.Tooltip(tooltipTriggerEl)
    }
  }

  sendOTP(verifyEmail:NgForm){
    console.log(verifyEmail)
    this.authService.forgetPassword(this.email).subscribe(
      (response)=>{
        if(response.status === 200){
          this.validateOTPForm = true 
          this.user2 = response.body as Forgot
          this.message = "Please Fill Otp"
          this.show()
          
          // console.log(this.user2)
        }
      },
      (error)=>{
        this.message = "Email-Id not Registered."
        this.show()
        verifyEmail.resetForm()
      }
    )
  }
  validateOTP(validateOTPForm:NgForm){
    // console.log('validate called')
    // console.log(this.otp)
    if(this.user2.otp === this.otp){
      this.changePasswordForm = true
      this.message = "Please fill your new Password."
      this.show()
    }
    else{
      // console.log('Invalid OTP send Again!')
      this.validateOTPForm=false
      this.message = "Invalid OTP !!!"
      this.show()
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
        this.message = "Password Changed Successfully."
        this.show()
        this.router.navigate(['/login'])
      },
      (error)=>{
        this.validateOTPForm=false
        this.message = "Error in Connection.Please try Again"
        this.show()
        // console.log('Error in Connection.Please try Again')
      }
    )
  }

  showToast:boolean=false
  closeToast() {
    this.showToast = false;
  }

  show() {
    this.showToast = true;
    setTimeout(()=> this.closeToast(),3000)
  }

  ngOnInit(){

  }
}
class Forgot{
  email!:string
  otp!:string

  constructor(){ }
}