import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { members } from '../dashboard.component';
import { ViewMembersService } from 'src/app/Customer/services/view-members.service';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css'],
})
export class ViewMembersComponent implements OnInit {
  constructor(private route:ActivatedRoute){ }
  memberName:string|null=""

  ngOnInit(): void {
    console.log('ngOnInit called in view')
    this.memberName = this.route.snapshot.paramMap.get('name')
    console.log(this.memberName)
  }
}
