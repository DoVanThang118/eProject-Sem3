import api from "./api";
import Swal from "sweetalert2";
const Alert = () =>{
    Swal.fire(
        'Pay Success!',
        'You clicked the button!',
        'success'
      )
}
const AlertFail = () =>{
    Swal.fire(
        'Pay Failed!',
        'Something went wrong!',
        'error'
      )
}

export const get = async ()=>{
    try{
     const url = "extendcontract";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }

 export const create_payment = async(payment) =>{
    const url = "extendcontract"
    try{
        const rs = await api.post(url,{contractId: payment.contractId, userId: payment.userId, totalmoney: payment.totalmoney, content: payment.content, numbermonth: payment.numbermonth   });
        // Alert();
        return rs.data;
    }catch(error){
        // AlertFail();
        return null;
    }
}

export const find = async(id)=>{
    try {
        const url = "extendcontract/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
 }

 export const filter = async(id)=>{
    try {
        const url = "extendcontract/filtercontract?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
 }