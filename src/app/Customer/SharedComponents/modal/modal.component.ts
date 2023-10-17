import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() pid:string|undefined
  ngOnInit(){
    // console.log('init')
    // console.log(this.pid)
  }
}
