import api from "./api";

import Swal from "sweetalert2";
const Alert = () =>{
    Swal.fire(
        'Create Contract Success!',
        'You clicked the button!',
        'success'
      )
}
const AlertFail = () =>{
    Swal.fire(
        'Create Contract Failed!',
        'You clicked the button!',
        'fail'
      )
}
export const get = async ()=>{
    try{
     const url = "contracts";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }

 export const create_contract = async(contract,add) =>{
    const url = "contracts"
    try{
        const rs = await api.post(url,{customername: contract.customername ,address: contract.address , district:add.dis, city:add.pro, tel:contract.tel, email:contract.email, chukydongtien:contract.chukydongtien,packdataId:contract.packdataId, usersId: contract.usersId});
        Alert();
        return rs.data;
    }catch(error){
        AlertFail();        
        return null;
    }
}
export const getallofuser = async(id)=>{
    try{
        const url = "contracts/allcontract?id="+id;
        const rs = await api.get(url);
        return rs.data;
       }catch(error){
           return [];
       }

 }


 export const tinhtong = async ()=>{
     try{
         const url = "contracts/total";
         const rs = await api.get(url);
         return rs.data;
     }catch(error){
         return 0;
     }
 }

 export const find = async(id)=>{
    try {
        const url = "contracts/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
 }
 export const findbyemail = async(email)=>{
    try {
        const url = "contracts/filteremail?email="+email;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
 }

 export const update_checkinstall = async(id,nhanvienlapdatId) =>{

    const url = "contracts/checkinstallation?id="+id+"&nhanvienlapdatId="+nhanvienlapdatId
    try{
        const rs = await api.put(url);
        alert("Check Install Success");
        return rs.data;
    }catch(error){
        alert("Check Install Fail ");
        return null;
    }
 }
 export const update_intallsuccess = async(id) =>{

    const url = "contracts/installsuccess?id="+id
    try{
        const rs = await api.put(url);
        alert("Check Install Success");
        return rs.data;
    }catch(error){
        alert("Check Install Fail ");
        return null;
    }
 }
 export const updatepayment = async(id) =>{

    const url = "contracts/payment?id="+id
    try{
        const rs = await api.put(url);
        alert("Pay Success");
        return rs.data;
    }catch(error){
        alert("Pay Fail ");
        return null;
    }
 }

 export const giahanhopdong = async(id) =>{

    const url = "contracts/extend?id="+id
    try{
        const rs = await api.put(url);
        return rs.data;
    }catch(error){
        return null;
    }
 }

 export const tong_month = async () =>{
     const url ="contracts/totalmonth";
     try{
        const rs = await api.get(url);
        return rs.data;
    }catch(error){
        return [];
    }
 }

 export const getagree = async ()=>{
     try{
         const url = "contracts/getcontract1";
         const rs = await api.get(url);
         return rs.data;

     }catch(error){
        return [];
    }
 }
 export const getdisagree = async ()=>{
    try{
        const url = "contracts/getcontract3";
        const rs = await api.get(url);
        return rs.data;

    }catch(error){
       return [];
   }
}


 export const getcontractpayment= async ()=>{
    try{
        const url = "contracts/getcontract2";
        const rs = await api.get(url);
        return rs.data;

    }catch(error){
       return [];
   }
}

export const userupcon = async(contract)=>{
    try{
        const url = "contracts/userupdate?id="+contract.id+"&chukydongtien="+contract.chukydongtien;
        const rs = await api.get(url);
        return rs.data;

    }catch(error){
       return null;
   }

}

export const userhuy = async(id)=>{
    try{
        const url = "contracts/userhuy?id="+id;
        const rs = await api.get(url);
        return rs.data;

    }catch(error){
       return null;
   }

}