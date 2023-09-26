import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-angular',
  templateUrl: './forms-angular.component.html',
  styleUrls: ['./forms-angular.component.css']
})
export class FormsAngularComponent {
formData:any=""
  getFormDetails(data:NgForm){
    console.log(data);
    console.log(typeof data);
    this.formData = data;
  }
}
