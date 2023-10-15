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
  username:string='';
  user:login=new login("","");
  constructor(private a1:AuthService,private router:Router){}

  ngOnInit(){
    
  }
  setRoute(){
    this.router.navigate(["/dashboard/mohan"])
  }
   
}