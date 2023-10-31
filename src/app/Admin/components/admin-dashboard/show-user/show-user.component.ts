import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {
  uuid:string=""
  constructor(private route:ActivatedRoute){ }

  ngOnInit(){
    this.uuid = this.route.snapshot.paramMap.get('id') as string
  }
}
