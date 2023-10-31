import { Component } from '@angular/core';
import { GenerateInvoiceService } from 'src/app/Admin/services/generate-invoice/generate-invoice.service';
import { AllUsers } from 'src/app/Admin/services/get-user-service/AllUsers.Model';
import { GetUserService } from 'src/app/Admin/services/get-user-service/get-user.service';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.css']
})
export class GenerateInvoiceComponent {
  allUsers:AllUsers[]=[]

  constructor(private getAll:GetUserService,private generate:GenerateInvoiceService){ }

  getAllUsers(){
    this.getAll.getAllUsers()
    this.getAll.obs.subscribe(
      (response)=>{
        this.allUsers = response
        console.log(this.allUsers)
        // console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  generateInv(uuid:string){
    console.log(uuid)
    this.generate.generateInvoice(uuid).subscribe(
      (response)=>{
        console.log(response)
        this.getAllUsers()
      }
    )
  }
  ngOnInit(){
    this.getAllUsers()
  }
}
