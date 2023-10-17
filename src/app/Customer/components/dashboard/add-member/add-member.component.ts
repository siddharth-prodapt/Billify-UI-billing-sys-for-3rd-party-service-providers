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

  constructor(private addMemberService:AddMemberService){ }

  addMember(){
    this.memberUser.userUuid=localStorage.getItem('uuid') as string
    this.addMemberService.addMemberUser(this.memberUser).subscribe(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
