import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inLogin:boolean=true
  username:string='';

  // constructor(){
  //    window.location.replace("/dashboard");
  // }
    // ngOnInit(){
    //   console.log("Login component");
    //   // window.location.replace("/dashboard");
    // }
}