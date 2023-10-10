import { Component, Input } from '@angular/core';
import { Plans } from '../../components/dashboard/all-plans/all-plans.component';

@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent {
  @Input() plan:Plans|undefined
}
