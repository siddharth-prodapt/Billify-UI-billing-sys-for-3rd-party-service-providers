import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PayInvoice } from './PayInvoice.Model';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class PayInvoiceService {

  constructor(private http:HttpClient) { }

  public payInvoice(payload:PayInvoice){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.post(CONSTANT.BASE_URL+"/user/invoice-payment",payload,{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')},observe:'response'})
  }
}
