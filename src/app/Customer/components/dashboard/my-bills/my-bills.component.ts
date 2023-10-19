import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { GetInvoiceService } from 'src/app/Customer/services/invoice-service/get-invoice.service';
import { Invoice } from 'src/app/Customer/services/invoice-service/Invoice.Model';
@Component({
  selector: 'app-my-bills',
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.css'] 
})
export class MyBillsComponent {
  bills:Invoice[]=[]
  username:any
  names:string[]=[]
  constructor(private d:DashboardComponent,private getInvoiceService:GetInvoiceService){}
  ngOnInit(){
    this.d.myObservable.subscribe((value)=>{
      this.username = value
    })
    this.getInvoiceService.getInvoices()
    this.getInvoiceService.obs.subscribe((response)=>{
      // console.log(response)
      // console.log(response[0])
      this.bills = response as Invoice[]
      console.log(this.bills)
    })
  }
}
