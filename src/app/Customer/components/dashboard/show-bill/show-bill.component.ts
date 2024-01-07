import { Component, NgIterable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/Customer/services/invoice-service/Invoice.Model';
import { PayInvoice } from 'src/app/Customer/services/invoice-service/PayInvoice.Model';
import { Subscriptions } from 'src/app/Customer/services/invoice-service/Subscriptions.Model';
import { GetInvoiceService } from 'src/app/Customer/services/invoice-service/get-invoice.service';
import { PayInvoiceService } from 'src/app/Customer/services/invoice-service/pay-invoice.service';

@Component({
  selector: 'app-show-bill',
  templateUrl: './show-bill.component.html',
  styleUrls: ['./show-bill.component.css']
})
export class ShowBillComponent {
  constructor(private router:Router,private route: ActivatedRoute,private getInvoiceService:GetInvoiceService,private payInvoiceService:PayInvoiceService){ }
  bid:string|null=''
  index!:number
  subs:Subscriptions[] = []
  invoice:Invoice = new Invoice()
  message:string=""
  paymentStatus:boolean=false
  total:number=0
  payload:PayInvoice = new PayInvoice("","",0)
  payBillBtn:boolean=true

  payBill(){
    console.log(localStorage.getItem('uuid'))
    this.payload.invoiceUuid = localStorage.getItem('invoiceId') as string
    this.payload.userUuid = localStorage.getItem('uuid') as string
    this.payload.amount = this.invoice.amount
    console.log(this.payload)
    this.payInvoiceService.payInvoice(this.payload).subscribe((response)=>{
      console.log(response)
      this.message = "Bill Paid 🎊"
      this.paymentStatus = true
      this.show()
      // this.router.navigate([''])
    },
    (error)=>{
      this.message = "Technical Issue Try again!"
      this.show()
    }
    )
  }

  ngOnInit(){
    console.log('noOnInit of show bill')
    this.bid = this.route.snapshot.paramMap.get('bid');
    localStorage.setItem('invoiceId',this.bid as string)
    if(localStorage.getItem('accountStatus') === 'TERMINATED'){
      console.log(localStorage.getItem('accountStatus') === 'TERMINATED')
      this.payBillBtn=false
      
    }
    this.getInvoiceService.showInvoices(this.bid as string).subscribe((response)=>{
      console.log(response)
      this.invoice = response as Invoice
      this.subs = this.invoice.subscribedPlanDetails as Subscriptions[]
      console.log((this.subs))
    })
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
