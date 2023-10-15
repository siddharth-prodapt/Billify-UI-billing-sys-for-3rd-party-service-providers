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
  isLoggedIn:boolean=false
  username:string='';
  user:login=new login("","");
  constructor(private a1:AuthService,private router:Router){}

  ngOnInit(){
    
  }
  setRoute(){
    this.isLoggedIn=true
    setTimeout(()=>{
      this.isLoggedIn=false
      this.router.navigate(["/dashboard/mohan"])
    },3000)
  }
   
}