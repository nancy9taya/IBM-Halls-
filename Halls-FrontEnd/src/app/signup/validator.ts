import {AbstractControl,FormGroup} from '@angular/forms'


export function passValidator(control:AbstractControl){
    if(control &&(control.value!=null || control.value!=undefined)){
        const cnfpassValue=control.value;
        const passControl=control.root.get('password');

        if(passControl){
            const passValue=passControl.value;
            if(passValue!==cnfpassValue){
                return{
                    isError:true
                };
            }
        }
        return null;
    }
}

export function emailValidator(control:AbstractControl){
    if(control &&(control.value!=null || control.value!=undefined)){
        const emailValue=control.value;
        const regex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
        const isMatched=emailValue.match(regex);
        if(!isMatched){
            return{
                isError:true
            };
        }
    }
    return null;
}