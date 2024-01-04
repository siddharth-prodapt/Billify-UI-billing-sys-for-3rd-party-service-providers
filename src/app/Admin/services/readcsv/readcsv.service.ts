import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { csvResponse } from './readCSV.Model';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ReadcsvService {

  constructor(private http:HttpClient) { }

  public read(){
    return this.http.get<csvResponse[]>(CONSTANT.BASE_URL+"/admin/csv-data",{headers:{"Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
