import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from 'src/class';

declare var bootstrap: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:signup=new signup("","","","","")
  constructor(private router:Router){ }
  ngOnInit(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = Array.from(tooltipTriggerList)
    for(const tooltipTriggerEl of tooltipList){
      new bootstrap.Tooltip(tooltipTriggerEl)
    }
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
