import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { members } from '../dashboard.component';
import { ViewMembersService } from 'src/app/Customer/services/view-members.service';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css'],
})
export class ViewMembersComponent implements OnInit {

  name:string|null=""
  constructor(private route:ActivatedRoute,private viewMemberService:ViewMembersService){ }
  ngOnInit(): void {
    console.log('ngOnInit called')
    this.viewMemberService.refresh$.subscribe(()=>{
      this.ngOnInit()
      
    })
    
  }
}
