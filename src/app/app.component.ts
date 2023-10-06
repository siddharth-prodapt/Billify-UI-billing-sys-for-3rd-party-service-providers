import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  constructor(private el:ElementRef) { }


  ngAfterViewInit() {
    // Access the DOM element
    const element = this.el.nativeElement;
    console.log('changed')
    // Assign a known HTML attribute
    element.setAttribute('data-bs-theme', '');
  }
  
}
