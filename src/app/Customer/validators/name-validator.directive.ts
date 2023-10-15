import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi:true,
    }
  ]
})
export class NameValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const value:string = control.value
    if(value){
      if(value.trim().length < 1){
        return {
          invalidName:true,
        }
      }
    }
    return null
  }
}
