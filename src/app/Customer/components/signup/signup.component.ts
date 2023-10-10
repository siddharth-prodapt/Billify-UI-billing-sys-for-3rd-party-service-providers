import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from 'src/class';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:signup=new signup("","","","")
  constructor(private router:Router){ }
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
