import {AbstractControl} from '@angular/forms'

export function passValidator(control:AbstractControl){
    if(control &&(control.value!=null || control.value!=undefined)){
        const passValue=control.value;
        if(passValue.length<8){
            return {
                isError:true
            };
        }
    }
    return null
}

export function cnfPassValidator(control:AbstractControl){
    if(control &&(control.value!=null|| control.value!=undefined)){
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
    else{
        return{
            isError:true
        };
    }
}

export function emailValidator(control:AbstractControl){
    if(control &&(control.value!=null || control.value!=undefined)){
        const emailValue=control.value;
        const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const isMatched=emailValue.match(regex);
        if(isMatched==null){
            return{
                isError:true
            };
        }

    }
    return null;
}