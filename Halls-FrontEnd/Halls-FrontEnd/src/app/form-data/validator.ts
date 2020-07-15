// import {AbstractControl,FormGroup} from '@angular/forms'

// export function cnfPassValidator(control:AbstractControl){
//     if(control &&(control.value!=null|| control.value!=undefined)){
//         const cnfpassValue=control.value;
//         const passControl=control.root.get('password');

//         if(passControl){
//             const passValue=passControl.value;
//             if(passValue!==cnfpassValue){
//                 console.log("Dont Match")
//                 return{
//                     isError:true
//                 };
//             }
//             else{
//                 console.log(cnfpassValue)
//                 console.log(passValue)
//                 console.log("Match")
//             }
//         }
//         return null;
//     }
//     else{
//         console.log("Came Here")
//         return{
//             isError:true
//         };
//     }
// }