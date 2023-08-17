import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import React, { useContext, useState } from "react";
import { register_member } from "../services/auth.service";
import UserContext from "../store/context";
import api from "../services/api";
import { useNavigate } from "react-router-dom";




const title = "Register Now";
// const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";


let socialList = [
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


const SignupPage = () => {
    const navigate = useNavigate();

    const {state,dispatch} = useContext(UserContext);
    const [user,setUser] = useState({name:"",email:"",password:"",roleTitle:"user",jobTitle:"customer"});
    const handleInput = (event)=>{
        user[event.target.name] = event.target.value;
        setUser(user);
    }
    const register = async (e)=>{
        e.preventDefault();
        const u = await register_member(user);
        // dispatch({type:"AUTH_LOGIN",payload:u.token});
        // state.token = u.token;
        dispatch({type:"UPDATE_USER",payload:u});
        state.userlogin = u;
        setTimeout(()=>{dispatch({type:"HIDE_LOADING"})},1000);
        localStorage.setItem("state",JSON.stringify(state));
        api.defaults.headers.common["Authorization"] = `Bearer ${u.token}`;
        if(state.userlogin != null){
            console.log("chạy vào đây r");
            return  navigate("/");
        }
    
    }


    return (
        <Fragment>
            <Header />
            <PageHeader title={'Register Now'} curPage={'Sign Up'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={register} >
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="User Name"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleInput}
                                />
                            </div>
                            {/* <div className="form-group">
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="Confirm Password"
                                />
                            </div> */}
                            <div className="form-group">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        {/* <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default SignupPage;