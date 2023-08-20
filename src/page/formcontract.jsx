import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Archive from "../component/sidebar/archive";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import Instagram from "../component/sidebar/instagram";
import PopularPost from "../component/sidebar/popular-post";
import PostCategory from "../component/sidebar/post-category";
import Respond from "../component/sidebar/respond";
import Search from "../component/sidebar/search";
import Tags from "../component/sidebar/tags";
import SelectCatagory from "../component/sidebar/selectCatagory";
import SelectLanguage from "../component/sidebar/select-language";
import PriceSelect from "../component/sidebar/price-select";
import SkillSelect from "../component/sidebar/skill-select";
import React, { useContext, useState, useEffect } from "react";
import {find} from "../services/packdata.service";
import {create_contract} from "../services/contract.service";

import UserContext from "../store/context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const btnText = "Đăng kí";
const socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]


 

const FormContract = () => {
    const navigate = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    const {id} = useParams();
    const [pack,setPack] = useState({});
    const [contract, setContract] = useState({customername: "",address:"",district:"",city:"", tel:"",email:state.userlogin.email,chukydongtien:0,packdataId:id,usersId: state.userlogin.id});

    const findPack = async ()=>{
        const pack = await find(id);
        setPack(pack)
        
    }
    console.log(id);
    console.log(pack);
    const handleChange = (event) => {
        contract[event.target.name] = event.target.value;
        setContract(contract);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const t = await create_contract(contract);
        console.log(t);
        if(t!=null){
       return  navigate("/profile");
        }
      };
    useEffect(()=>{
        findPack();
        },[]);
        const handlechuky = (e)=>{
            const t = e.target.value;
            setContract({...contract,chukydongtien:t})
        }
        console.log(contract);
        
  

    return (
        <Fragment>
            <Header />
            <PageHeader title={'Thông Tin Đăng Ký Gói Cước'} curPage={'Infomation Contract'} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                               
                                            </div>

                                    <div id="respond" className="comment-respond mb-lg-0">
                                     <h1 className="title-border" style={{textAlign:"center"}}>Thông Tin Gói Cước</h1>
                                     <div className="add-comment" >

                                     <img src={pack.thumnail}  width={250}
                                         style={{objectFit:'cover', marginLeft:220}}/>
                                    <h5 className="title-border" style={{textAlign:"center"}}>Tên Gói Cước: {pack.name}</h5>
                                    <p>Content: {pack.description}</p>
                                    <p>Price 1 Month: {pack.gia1thang}</p>
                                    <p>Price 1 Quarter: {pack.gia1quy}</p>
                                    <hr></hr>
                                         <form onSubmit={handleSubmit} style={{marginTop:25}} id="commentform" className="contact-form">
                                                {/*<input */}
                                                {/*    type="text"*/}
                                                {/*    name="name"*/}
                                                {/*    className="w-40"*/}
                                                {/*    placeholder="Tên"*/}
                                                {/*/>  */}
                                                
                                                {/* <input */}
                                                {/*    type="text"*/}
                                                {/*    name="name"*/}
                                                {/*    placeholder="sdt"*/}
                                                {/*/>*/}

                                                {/*<input */}
                                                {/*    type="text"*/}
                                                {/*    name="subject"*/}
                                                {/*    className="w-40"*/}
                                                {/*    placeholder="địa chỉ"*/}
                                                {/*/>*/}
                                                {/*   <input */}
                                                {/*    type="text"*/}
                                                {/*    name="subject"*/}
                                                {/*    className="w-40"*/}
                                                {/*    placeholder="số căn cước"*/}
                                                {/*/>*/}
                                                {/*   <input */}
                                                {/*    type="text"*/}
                                                {/*    name="subject"*/}
                                                {/*    className="w-40"*/}
                                                {/*    placeholder="ngày sinh"*/}
                                                {/*/>*/}
                                                {/*   <input */}
                                                {/*    type="text"*/}
                                                {/*    name="subject"*/}
                                                {/*    className="w-40"*/}
                                                {/*    placeholder="địa chỉ email"*/}
                                                {/*/>*/}
                                                {/*   <input */}
                                                {/*    type="text"*/}
                                                {/*    name="subject"*/}
                                                {/*    className="w-40"*/}
                                                {/*    placeholder="Write a Subject"*/}
                                                {/*/>*/}
                                                {/*<textarea */}
                                                {/*    rows="7" */}
                                                {/*    type="text"*/}
                                                {/*    name="message"*/}
                                                {/*    placeholder="Your Message"*/}
                                                {/*></textarea>*/}
                                                {/*<button type="submit" className="lab-btn"><span>{btnText}</span></button>*/}
                                             <div className="w-100"><h4>Customer information</h4></div>
                                             <div className="form-group">
                                                 <input  onChange={handleChange} type="text" name="customername" className="form-control" placeholder="Your Name *" required={true}/>
                                             </div>
                                             <div className="form-group">
                                                 <input  onChange={handleChange} type="text" name="tel" className="form-control" placeholder="Mobile Number *" required={true}/>
                                             </div>

                                             <div className="w-100"><h4>Enter address</h4></div>
                                             <div className="form-group">
                                                 <input  onChange={handleChange} type="text" name="district" className="form-control" placeholder="District *" required={true}/>
                                             </div>
                                             <div className="form-group">
                                                 <input  onChange={handleChange} type="text" name="city" className="form-control" placeholder="City *" required={true}/>
                                             </div>
                                             {/* <div className="form-group">
                                                 <div className="select-item">
                                                     <SelectCatagory select={'all'} />
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div> */}
                                             {/* <div className="form-group">
                                                 <div className="select-item">
                                                     <SelectLanguage select={'all'} />
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div> */}
                                           
                                             {/* <div className="form-group">
                                                 <div className="select-item">
                                                     <SkillSelect select={'all'} />
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div> */}
                                             <div className="form-group w-100">
                                                 <input onChange={handleChange} type="text" name="address" className="form-control" placeholder="Address *" required={true}/>
                                             </div>
                                             <div className="form-group">
                                                 <div className="select-item">
                                                 <select onClick={handlechuky}>
                                                    <option value="">Chu kỳ đóng tiền cước</option>
                                                    <option value="1">1 Month</option>
                                                    <option value="3">3 Month</option>
                                                </select>
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div>
                                             {/* <div className="form-group w-100">
                                                 <input type="text" className="form-control" placeholder="Address 2"/>
                                             </div> */}
                                             <div className="form-group w-100 text-center mt-4">
                                                 <button type="submit" className="lab-btn"><span>Next</span></button>
                                             </div>
                                            
                                        
                                         </form>
            </div>			
        </div>   
                                            
                                        
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default FormContract;