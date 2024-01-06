import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from 'src/app/Customer/services/update-user-details/Profile.Model';
import { UpdateUserDetailsService } from 'src/app/Customer/services/update-user-details/update-user-details.service';
import { UserDetailService } from 'src/app/Customer/services/user-detail-service/user-detail.service';
import { user } from 'src/app/Customer/services/user-detail-service/user.Model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  p!:user
  // p1:user=new user("","",0,,"","","","",0,"","")
  updateProfile:Profile = new Profile()
  editAble:boolean=true

  constructor(private userDetailService:UserDetailService,private updateUserDetails:UpdateUserDetailsService){ }

  ngOnInit(){
    this.userDetailService.getUserDetails(this.p).subscribe((data)=>{
      console.log(data)
      this.p=data as user 
    })
  }

  enableFormEdit(){
    this.editAble=false
    console.log(this.editAble)
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
    this.updateProfile.phoneNo=profileForm.value.phoneNumber
    this.updateProfile.houseNumber=profileForm.value.houseNumber
    this.updateProfile.city=profileForm.value.city
    this.updateProfile.state=profileForm.value.state
    this.updateProfile.country=profileForm.value.country
    this.updateProfile.pincode=profileForm.value.pincode
    console.log(this.updateProfile)
    this.updateUserDetails.updateProfile(this.updateProfile).subscribe((data)=>{
      console.log(data)
    })
    this.editAble=true
  }
}