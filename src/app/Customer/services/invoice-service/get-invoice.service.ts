import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { CONSTANT } from 'src/app/config/constant/constant';
import { Invoice } from './Invoice.Model';

@Injectable({
  providedIn: 'root'
})
export class GetInvoiceService {
  obs!:Observable<any>
  constructor(private http:HttpClient) { }

  getInvoices(){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    this.obs = this.http.get(CONSTANT.BASE_URL+"/user/"+localStorage.getItem('uuid')+"/invoice",{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')}})
  }
  showInvoices(bid:string){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.get(CONSTANT.BASE_URL2+"/v2/user/invoice/"+bid,{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
