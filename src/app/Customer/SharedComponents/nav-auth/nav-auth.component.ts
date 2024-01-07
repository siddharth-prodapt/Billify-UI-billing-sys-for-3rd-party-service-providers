import { Component,Input } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent {
  accountAccess:boolean=false
  suspended:boolean = false
  message!:string
  logout:boolean=false
  admin:boolean=false
  constructor(private a1:AuthService,private router:Router){ }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  navigate(){
    if(this.admin){
      this.router.navigate(['/admin'])
    }
    else{
      this.router.navigate(['/dashboard/'+localStorage.getItem('name')])
    }
  }
  ngOnInit(){
    if(localStorage.getItem('loggedIn')==='true'){
      this.logout=true
      if(localStorage.getItem('admin')==='true'){
        this.admin=true
      }
    }
    if(localStorage.getItem('accountAccess') === 'true'){
      this.accountAccess = true
      this.message = localStorage.getItem('accountStatus') as string
    }
    else if(localStorage.getItem('accountStatus') === 'SUSPENDED'){
      this.suspended = true
      this.message = localStorage.getItem('accountStatus') as string
    }
    else{
      this.accountAccess = false
      this.message = localStorage.getItem('accountStatus') as string
    }
  }
}
