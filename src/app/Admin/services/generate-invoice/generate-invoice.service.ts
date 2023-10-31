import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class GenerateInvoiceService {

  constructor(private http:HttpClient) { }

  public generateInvoice(uuid:string){
    return this.http.post(CONSTANT.BASE_URL+'/admin/invoice/'+uuid,'',{headers:{"Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
