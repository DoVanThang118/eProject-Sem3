import api from "./api";



export const get = async ()=>{
    try{
     const url = "packdata";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }

 export const getsearch = async (search)=>{
    try{
     const url = "packdata/search?name="+search.name;
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }

 export const getoutstanding = async ()=>{
    try{
     const url = "packdata/get-outstanding";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "packdata/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_packdata = async(pack) =>{
    const url = "packdata"
    try{
        const rs = await api.post(url,{name: pack.name,description: pack.description,gia1thang: pack.gia1thang, gia1quy:pack.gia1quy,typename:pack.typename, thumnail: pack.thumbnail});
       
        return rs.data;
    }catch(error){
       
       
        return {};
    }
}

