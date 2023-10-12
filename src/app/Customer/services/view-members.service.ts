import { Injectable } from '@angular/core';
import { members } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ViewMembersService {
  allMembers:members[]=[]
  constructor() { }
  getAllMembers(recievedMembers:members[]){
    this.allMembers = recievedMembers
    console.log('In-service',this.allMembers)
  }
}
