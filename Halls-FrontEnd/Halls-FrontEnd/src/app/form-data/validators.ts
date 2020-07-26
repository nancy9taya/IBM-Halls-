import {AbstractControl} from '@angular/forms'

export function numValidator(control:AbstractControl){
    if(this.isBench){
        if(control.value==null || control.value==undefined){
            if(control.value<=0){
                return {
                    isError:true
                };
            }
        }
    }
    return null
}

