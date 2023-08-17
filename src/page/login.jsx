import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import React, { useContext, useState } from "react";
import { auth_login } from "../services/auth.service";
import UserContext from "../store/context";
import api from "../services/api";
import { useNavigate } from "react-router-dom";




const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Submit Now";


const socialList = [
    // {
    //     link: '#',
    //     iconName: 'icofont-facebook',
    //     className: 'facebook',
    // },
    // {
    //     link: '#',
    //     iconName: 'icofont-twitter',
    //     className: 'twitter',
    // },
    // {
    //     link: '#',
    //     iconName: 'icofont-linkedin',
    //     className: 'linkedin',
    // },
    // {
    //     link: '#',
    //     iconName: 'icofont-instagram',
    //     className: 'instagram',
    // },
    // {
    //     link: '#',
    //     iconName: 'icofont-pinterest',
    //     className: 'pinterest',
    // },
]

const LoginPage = () => {
    const {state,dispatch} = useContext(UserContext);
    const [user,setUser] = useState({email:"",password:""});
    const navigate = useNavigate();
    
    const handleChange = (event)=>{
        user[event.target.name] = event.target.value;
        setUser(user);
    }
   
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const u = await auth_login(user);
        if(u!=null){
            dispatch({type:"UPDATE_USER",payload:u});
        state.userlogin = u;
        setTimeout(()=>{dispatch({type:"HIDE_LOADING"})},1000);
        localStorage.setItem("state",JSON.stringify(state));
        api.defaults.headers.common["Authorization"] = `Bearer ${u.token}`;
        console.log(state.userlogin);
        }
        if(state.userlogin != null){
            console.log("chạy vào đây r");
            return  navigate("/");
        }
        
        
    }
    





    return (
        <Fragment>
            <Header />
            <PageHeader title={'Login Page'} curPage={'Login'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="User Email*"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password *"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    {/* <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div> */}
                                    {/* <Link to="/forgetpass">Forget Password?</Link> */}
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            {/* <span className="d-block cate pt-10">Don’t Have any Account?  <Link to="/signup">Sign Up</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">{socialTitle}</h5> */}
                       
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default LoginPage;