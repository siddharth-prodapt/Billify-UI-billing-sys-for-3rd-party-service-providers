import { Component } from '@angular/core';
import { AllUsers } from 'src/app/Admin/services/get-user-service/AllUsers.Model';
import { GetUserService } from 'src/app/Admin/services/get-user-service/get-user.service';
import { ToogleAccessService } from 'src/app/Admin/services/get-user-service/toogle-access.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  allUsers:AllUsers[]=[]

  constructor(private getAll:GetUserService,private toogle:ToogleAccessService){ }

  getAllUsers(){
    this.getAll.getAllUsers()
    this.getAll.obs.subscribe(
      (response)=>{
        this.allUsers = response
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  changeStatus(uuid:string){
    // console.log(uuid)
    this.toogle.toogleAccess(uuid).subscribe(
      (response)=>{
        console.log(response)
        this.getAllUsers()
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }
  ngOnInit(){
    this.getAllUsers()
  }
}
