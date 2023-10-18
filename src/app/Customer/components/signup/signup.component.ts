import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../../services/auth-service/SignUp.Model';
import { signup } from 'src/class';
import { AuthService } from '../../services/auth-service/auth.service';
import { trigger, style, animate, transition } from '@angular/animations';

declare var bootstrap: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('leftRightAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-60%)' }),
        animate('0.5s ease', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ]
})
export class SignupComponent {
  user:signup=new signup("","","","","")
  users:SignUp=new SignUp()
  toasts:boolean=false
  isSignedUp:boolean=false
  successMessage!:string
  errorMessage!:string
  constructor(private router:Router,private authService:AuthService){ }
  ngOnInit(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = Array.from(tooltipTriggerList)
    for(const tooltipTriggerEl of tooltipList){
      new bootstrap.Tooltip(tooltipTriggerEl)
    }
  }
  signUp(){
    this.users.name = this.user.name as string
    this.users.email = this.user.email as string
    this.users.userType = this.user.userType as string
    this.users.password = this.user.password as string
    this.authService.signUpUser(this.users).subscribe(
      (data)=>{
        this.toasts=true
        // this.t.show()
        this.isSignedUp = true
        console.log(data)
        this.successMessage="User Successfully Registered !!!"
        setTimeout(()=>{this.router.navigate(['/login'])},2000)
      },
      (error)=>{
        this.toasts=true
        // this.t.show()
        if(error.status===403){
          this.errorMessage="Email-Id exists"
          setTimeout(()=>{this.router.navigate(['/login'])},2000)
        }
        else{
          this.errorMessage="Error in Connection"
          setTimeout(()=>{
            this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
              this.router.navigate(['/signup'])
            })
          },2000)
        }
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
