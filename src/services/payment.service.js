import api from "./api";
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
        const rs = await api.post(url,{contractId: payment.contractId, userId: payment.userId, totalmoney: payment.totalmoney, content: payment.content   });
        return rs.data;
    }catch(error){
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