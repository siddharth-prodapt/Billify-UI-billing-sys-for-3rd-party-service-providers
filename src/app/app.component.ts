import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'myApp';
  name: string = 'Sid';
  password:string='';

  list:number[] = [10, 20, 30];

  trackByFn(index:number):number{
    return index;
  }
}
