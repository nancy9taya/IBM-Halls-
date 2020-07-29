import {AbstractControl} from '@angular/forms'

export function numValidator(control:AbstractControl){
    // if(this.isBench){
        if(control &&(control.value!=null || control.value!=undefined)){
            console.log("Validatttttttttttttttorrrrrrrrrrrrrrrrr")
            console.log(control.value)
            if(control.value<=0){
                return {
                    isError:true
                };
            }
        }
    // }
    return null
}

