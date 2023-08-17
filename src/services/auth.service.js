import api from "./api";

export const auth_login = async (user)=>{
    const url = "auth/login";
    try {
        const rs = await api.post(url,{email:user.email,password:user.password});
       // const token = rs.data.token;
            //   alert("Đăng nhập thành công");

        return rs.data;
    } catch (error) {
        alert("Tài khoản hoặc mật khẩu không đúng");
        return null;
    }
    
}

export const auth_profile = async ()=>{
    const url = "auth/profile";
    try {
        const rs = await api.get(url);
       // const token = rs.data.token;
        return rs.data;
    } catch (error) {
        alert("Tài khoản hoặc mật khẩu không đúng");
        return null;
    }
}
export const register_member = async(user)=>{
    const url = "auth/register";
    try{
        const rs = await api.post(url,{name:user.name, email:user.email, password:user.password, roleTitle:user.roleTitle, jobTitle:user.jobTitle});
        alert("Tạo tài khoản thành công");
        return rs.data;

    }catch(error){
        alert("Tạo tài khoản thất bại");
        return null;
    }
}
