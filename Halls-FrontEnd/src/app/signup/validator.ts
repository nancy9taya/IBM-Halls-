import {AbstractControl,FormGroup} from '@angular/forms'
import {AuthService} from '../auth.service'
import {HttpClient} from '@angular/commom/http'

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
                console.log("Dont Match")
                return{
                    isError:true
                };
            }
            else{
                console.log(cnfpassValue)
                console.log(passValue)
                console.log("Match")
            }
        }
        return null;
    }
    else{
        console.log("Came Here")
        return{
            isError:true
        };
    }
}

export function emailValidator(_auth:AuthService,control:AbstractControl){
    if(control &&(control.value!=null || control.value!=undefined)){
        const emailValue=control.value;
        const regex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
        const isMatched=emailValue.match(regex);
        if(!isMatched){
            return{
                isError:true
            };
        }
        //check if mail exist before
        _auth.isMailExist(emailValue).subscribe(res=>{
            if(res.existOrNot===false){
                return{
                    isError:true
                }
            }
        },err=>{
            return{
                isError:true
            }
        })

    }
    return null;
}