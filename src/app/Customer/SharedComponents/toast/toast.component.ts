import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message!: string;
  showToast: boolean = false;

  closeToast() {
    this.showToast = false;
  }

  show() {
    this.showToast = true;
    setTimeout(()=> this.closeToast(),3000)
  }

  ngOnInit(){
    this.show()
  }
}

