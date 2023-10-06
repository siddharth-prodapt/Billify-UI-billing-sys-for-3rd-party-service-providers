import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  private currentTheme:string="dark"
  constructor() { }
  
}
