import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-bill',
  templateUrl: './show-bill.component.html',
  styleUrls: ['./show-bill.component.css']
})
export class ShowBillComponent {
  constructor(private route: ActivatedRoute){
    
  }
  bid:string|null=''
  ngOnInit(){
    
    this.bid = this.route.snapshot.paramMap.get('bid');
  }
}
