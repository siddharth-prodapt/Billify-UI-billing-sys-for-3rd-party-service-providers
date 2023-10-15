import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailService } from 'src/app/Customer/services/user-detail-service/user-detail.service';
import { user } from 'src/app/Customer/services/user-detail-service/user.Model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  p!:user
  p1:user=new user("","",0,"","","","","",0,"","")
  editAble:boolean=true

  constructor(private userDetailService:UserDetailService){ }

  ngOnInit(){
    this.userDetailService.userObservable.subscribe((data)=>{
      console.log(data)
      this.p=data as user 
    })
  }

  enableFormEdit(){
    this.editAble=false
  }
  disableFormEdit(profileForm:NgForm){
    // console.log(profileForm.value)
    this.discardChange(profileForm)
    this.editAble=true
  }
  discardChange(profileForm:NgForm){
    // console.log('calling discard change')
    profileForm.resetForm(this.p)
  }
  saveChanges(profileForm:NgForm){
    console.log(profileForm.value)
  }
}

class profile{
  name:string|undefined
  constructor(name:string){
    this.name = name
  }
}