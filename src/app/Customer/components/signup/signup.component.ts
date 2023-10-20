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
  isSignedUp:boolean=false
  spinner:boolean=false
  message:string=""
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
        this.isSignedUp = true
        console.log(data)
        this.message="User Successfully Registered🎉 Re-directing to login."
        this.show()
        this.spinner = false
        this.router.navigate(['/login'])
      },
      (error)=>{
        if(error.status===403){
          this.message="Email-Id exists."
          this.show()
          this.spinner=false
          this.router.navigate(['/login'])
        }
        else{
          this.message="Error in Connection."
          this.show()
          this.spinner = false
          // setTimeout(()=>{
          //   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          //     this.router.navigate(['/signup'])
          //   })
          // },2000)
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

  showToast:boolean=false
  closeToast() {
    this.showToast = false;
  }
  show() {
    this.showToast = true;
    setTimeout(()=> this.closeToast(),3000)
  }
}
