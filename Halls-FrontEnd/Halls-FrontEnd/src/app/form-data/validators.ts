import {AbstractControl} from '@angular/forms'

export function benchValidator(control:AbstractControl){
    if(this.isBench){
        if(control.value==null || control.value==undefined){
            return {
                isError:true
            };
        }
    }
    return null
}