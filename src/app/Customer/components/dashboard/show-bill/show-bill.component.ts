import { Component, NgIterable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/Customer/services/invoice-service/Invoice.Model';
import { Subscriptions } from 'src/app/Customer/services/invoice-service/Subscriptions.Model';
import { GetInvoiceService } from 'src/app/Customer/services/invoice-service/get-invoice.service';

@Component({
  selector: 'app-show-bill',
  templateUrl: './show-bill.component.html',
  styleUrls: ['./show-bill.component.css']
})
export class ShowBillComponent {
  constructor(private route: ActivatedRoute,private getInvoiceService:GetInvoiceService){ }
  bid:string|null=''
  index!:number
  subs:Subscriptions[] = []
  invoice!:Invoice
  total:number=0
  ngOnInit(){
    console.log('noOnInit of show bill')
    this.bid = this.route.snapshot.paramMap.get('bid');
    this.index = parseInt(this.bid as string,10)
    console.log(typeof(this.index))
    this.getInvoiceService.getInvoices()
    this.getInvoiceService.obs.subscribe((response)=>{
      console.log(response[this.index])
      this.invoice = response[this.index] as Invoice
      this.subs = response[this.index].subscribedPlans as Subscriptions[]
      console.log(typeof(this.subs))
    })
  }
}
