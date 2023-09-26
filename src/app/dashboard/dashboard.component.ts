import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username:string|null='';

  constructor(private route: ActivatedRoute){
    
  }

  ngOnInit(){
    
    this.username = this.route.snapshot.paramMap.get('username');
  }

}
