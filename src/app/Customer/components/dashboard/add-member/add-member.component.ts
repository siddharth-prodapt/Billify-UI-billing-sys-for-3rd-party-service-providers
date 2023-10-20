import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member } from 'src/app/Customer/services/member-services/Member.Model';
import { AddMemberService } from 'src/app/Customer/services/member-services/add-member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {

  memberUser:Member = new Member()
  message:string=""

  constructor(private addMemberService:AddMemberService){ }

  addMember(){
    this.memberUser.userUuid=localStorage.getItem('uuid') as string
    this.addMemberService.addMemberUser(this.memberUser).subscribe(
      (data)=>{
        console.log(data)
        this.message = "Member added successfully 👍"
        this.show()
      },
      (error)=>{
        console.log(error)
        this.message = "Technical Issue Please Try Again !"
        this.show()
      }
    )
  }
  showToast:boolean=false
  closeToast() {
    this.showToast = false;
  }

  show() {
    this.showToast = true;
    setTimeout(()=> this.closeToast(),3000)
  }
}
