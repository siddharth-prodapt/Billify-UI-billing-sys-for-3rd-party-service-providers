import { Injectable } from '@angular/core';
import { Profile } from './Profile.Model';
import { HttpClient } from '@angular/common/http';
import { CONSTANT } from 'src/app/config/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserDetailsService {

  constructor(private http:HttpClient) { }

  updateProfile(updateProfile:Profile){
    return this.http.put(CONSTANT.BASE_URL+"/user/"+localStorage.getItem('uuid'),updateProfile,{headers:{ "Authorization": "Bearer "+localStorage.getItem('token')}})
  }
}
