import { Component,Input } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent {
  @Input() accountAccess:boolean=false
  logout:boolean=false
  admin:boolean=false
  constructor(private authService:AuthService,private router:Router){ }

  @Input()

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
  }
}
