import { Component } from '@angular/core';
import { AdminDashboardService } from 'src/app/Admin/services/admin-dashboard/admin-dashboard.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {

  information:any={}
  constructor(private dashboard:AdminDashboardService) { }

  ngOnInit(){
    this.dashboard.getDashboardData().subscribe(
      (response)=>{
        this.information = response
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
