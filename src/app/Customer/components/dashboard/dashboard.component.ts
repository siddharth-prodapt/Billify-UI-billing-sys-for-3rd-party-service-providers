import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ViewMembersComponent } from './view-members/view-members.component';
import { ViewMembersService } from '../../services/view-members.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private route: ActivatedRoute,private viewMemberService:ViewMembersService){ }
  
  username:string|null="";
  allMembers:members[] = [
    {
      name:"prince",id:9093
    },
    {
      name:"shyam",id:9094
    },
    {
      name:"radhe",id:9095
    }
  ]

  triggerRefresh(){
    this.viewMemberService.triggerRefresh()
  }
  showMember(){
    console.log("Called show Members function")
    // this.view.ngOnInit()
  }

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
  ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('username');
  }

  // @ViewChild(ViewMembersComponent) viewMembers:ViewMembersComponent;

  // callChildFunction(){
  //   this.viewMembers?.getNameorId()
  //   console.log('calling callChild')
  // }

}

export class members{
  name?:string
  id?:number

  constructor(name:string,id:number){
    this.name = name
    this.id = id
  }
}