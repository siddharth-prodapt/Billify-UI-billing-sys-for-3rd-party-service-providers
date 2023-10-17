import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  openNav(){
    console.log('clicked open nav')
    document.querySelector("#sideMenuCollapsed")?.classList.add("d-none")
    document.querySelector("#content")?.classList.remove("col-md-11")
    document.querySelector("#sideMenu")?.classList.remove("d-none")
  }
  closeNav(){
    console.log('clicked close nav')
    document.querySelector("#sideMenuCollapsed")?.classList.remove("d-none")
    document.querySelector("#content")?.classList.add("col-md-11")
    document.querySelector("#sideMenu")?.classList.add("d-none")
  }
}
