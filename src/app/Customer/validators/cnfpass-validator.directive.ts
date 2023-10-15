import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCnfpassValidator]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: CnfpassValidatorDirective,
      multi:true,
    }
  ]
})
export class CnfpassValidatorDirective implements Validator{

  @Input('appCnfpassValidator') fieldToMatch!:string
  
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.root.get(this.fieldToMatch)?.value
    const cnfPassword = control.value
    if(password && cnfPassword){
      if(password != cnfPassword){
        return{
          matchPassword:true
        }
      }
    }
    return null
  }

}
