import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { login } from 'src/class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent {
  inLogin:boolean=true
  username:string='';
  user:any
  l1:login=new login("","");
  constructor(private authservice:AuthService){}
  send(){
    console.log(this.l1)
    this.authservice.post( this.l1).subscribe(res=>console.log("API RESponse",res));   
  }

   
}