import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent {
  constructor(private authService:AuthService,private router:Router){ }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
