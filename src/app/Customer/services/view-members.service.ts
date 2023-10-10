import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewMembersService {

  constructor() { }
  private refreshSubject = new Subject<void>();

  // Observable that other components can subscribe to
  refresh$ = this.refreshSubject.asObservable();

  // Method to trigger a refresh
  triggerRefresh() {
    this.refreshSubject.next();
  }
}
