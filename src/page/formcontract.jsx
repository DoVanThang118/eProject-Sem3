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
import axios from 'axios';
import { Link } from "react-router-dom";
const host = "https://provinces.open-api.vn/api/";

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
    const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const[add,setAdd] = useState({pro:0,dis:0,war:0});
  


    const navigate = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    const {id} = useParams();
    const [pack,setPack] = useState({});
    const [contract, setContract] = useState({customername: "",address:"", tel:"",email:state.userlogin.email,chukydongtien:0,packdataId:id,usersId: state.userlogin.id});

    const findPack = async ()=>{
        const pack = await find(id);
        setPack(pack)
        
    }
    console.log(id);
    console.log(pack);
    const handleChange = (event) => {
        contract[event.target.name] = event.target.value;
        setContract(contract);
        setContract({...contract,address:contract.address+"/"+add.war})
       

      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const t = await create_contract(contract,add);
        console.log(t);
        if(t!=null){
       return  navigate("/blog");
        }
      };
    useEffect(()=>{
        findPack();
        callAPI('https://provinces.open-api.vn/api/?depth=1');
        },[]);


        const handlechuky = (e)=>{
            const t = e.target.value;
            setContract({...contract,chukydongtien:t})
        }
        


        const callAPI = (api) => {
            axios.get(api)
              .then((response) => {
                setProvinces(response.data);
              });
          }
        
          const callApiDistrict = (api) => {
            axios.get(api)
              .then((response) => {
                setDistricts(response.data.districts);
              });
          }
        
          const callApiWard = (api) => {
            axios.get(api)
              .then((response) => {
                setWards(response.data.wards);
              });
          }
        
          const renderOptions = (array) => {
            return (
              <>
                <option disabled selected>Chọn</option>
                {array.map((element) => (
                  <option key={element.code} value={element.code}>{element.name}</option>
                ))}
              </>
            );
          }
        
          const handleProvinceChange = (event) => {
            const provinceValue = event.target.value;
            callApiDistrict(host + "p/" + provinceValue + "?depth=2");
            const findpro = provinces.find((provinces)=>provinces.code == provinceValue)
            setAdd({...add,pro:findpro.name});
            
          };
        
          const handleDistrictChange = (event) => {
            const districtValue = event.target.value;
            callApiWard(host + "d/" + districtValue + "?depth=2");
            const finddis = districts.find((districts)=>districts.code == districtValue)
            setAdd({...add,dis:finddis.name});


          };
        
          const handleWardChange = async (event) => {
            const wardsValue = event.target.value;
            // setAdd({...add,war:wardsValue});
            const findward = wards.find((wards)=>wards.code == wardsValue);
            setAdd({...add,war:findward.name})

          };

          const handleAddChange = (event)=>{

            add[event.target.name] = event.target.value;
            setAdd(add);

          }
    
        
          

          console.log(add);
          console.log(contract);
        
  

    return (
        <Fragment>
            <Header />
          
            
            <PageHeader title={'Pack Data Subscribe Information'} curPage={'Information Contract'} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                <Link to="/"><img src="../assets/images/logo/01.png" alt="logo"  width={120} borderRadius={20} style={{objectFit:'cover',borderRadius:20, marginTop:-880}} /></Link>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                               
                                            </div>

                                    <div id="respond" className="comment-respond mb-lg-0">
                                     <h1 className="title-border" style={{textAlign:"center"}}>Pack Data Information</h1>
                                     <div className="add-comment" >

                                        <div style={{display:"flex",justifyContent:"center"}}>
                                        <img src={pack.thumnail}  width={250}
                                         style={{objectFit:'cover',borderRadius:10}}/>
                                        </div>

                                     
                                    <h5 className="title-border" style={{textAlign:"center"}}>Pack Data Name: {pack.name}</h5>
                                    <p>Content: {pack.description}</p>
                                    <p>Price 1 Month: {pack.gia1thang} USD</p>
                                    <p>Price 1 Quarter: {pack.gia1quy} USD</p>
                                    <hr></hr>
                                         <form onSubmit={handleSubmit} style={{marginTop:25}} id="commentform" className="contact-form">
                                         <div>
     
     
     

                                        </div>
                                               
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
                                             <div className="w-100"><h4>Customer Information</h4></div>
                                             <div className="form-group">
                                                 <input  onChange={handleChange} type="text" name="customername" className="form-control" placeholder="Your Name *" required={true}/>
                                             </div>
                                             <div className="form-group">
                                                 <input  onChange={handleChange} type="text" name="tel" className="form-control" placeholder="Mobile Number *" required={true}/>
                                             </div>

                                             <div className="w-100"><h4>Enter address</h4></div>

                                             {(provinces.length>0?<div className="form-group">
                                                <label style={{marginBottom:5}}>City</label>
                                                <select   style={{
                                                    border: '1px solid #f0f0f0',
                                                    borderRadius: '4px',
                                                    backgroundColor: '#fff',
                                                    boxShadow: '0px 2px 4px 0px rgba(0,0,0,.06)',
                                                    height: '57px',
                                                    padding: '0 25px'
                                                }} id="province"  onChange={handleProvinceChange} required={true}>
                                                    {renderOptions(provinces)}
                                                </select>
                                             </div>:<div className="form-group">
                                                <label></label>
                                                 <input  onChange={handleAddChange} type="text" name="pro" className="form-control" placeholder="City *" required={true}/>
                                             </div>)}

                                             {(provinces.length>0?  <div className="form-group">
                                             <label style={{marginBottom:5}}>District</label>

                                                <select   style={{
                                                        border: '1px solid #f0f0f0',
                                                        borderRadius: '4px',
                                                        backgroundColor: '#fff',
                                                        boxShadow: '0px 2px 4px 0px rgba(0,0,0,.06)',
                                                        height: '57px',
                                                        padding: '0 25px'
                                                    }} id="district" placeholder="Quận/Huyện" onChange={handleDistrictChange} required={true}>
                                                    {renderOptions(districts)}
                                                </select>                                             
                                            </div>:<div className="form-group">
                                                <label></label>
                                                 <input  onChange={handleAddChange} type="text" name="dis" className="form-control" placeholder="District *" required={true}/>
                                             </div>)}


                                             {(provinces.length>0? <div className="form-group">
                                            <label style={{marginBottom:5}}>Ward</label>

                                                        <select   style={{
                                                        border: '1px solid #f0f0f0',
                                                        borderRadius: '4px',
                                                        backgroundColor: '#fff',
                                                        boxShadow: '0px 2px 4px 0px rgba(0,0,0,.06)',
                                                        height: '57px',
                                                        padding: '0 25px'
                                                    }} id="ward" placeholder="Phường/Xã" onChange={handleWardChange} required={true}>
                                                    {renderOptions(wards)}
                                                </select>                                            
                                            </div> :<div className="form-group">
                                            <label></label>
                                                 <input  onChange={handleAddChange} type="text" name="war" className="form-control" placeholder="Ward *" required={true}/>
                                             </div>)}
                                             
                                           
                                            
                                            <div className="form-group" style={{marginTop:26}}>
                                                 <div className="select-item">
                                                    <select   style={{
                                                        border: '1px solid #f0f0f0',
                                                        borderRadius: '4px',
                                                        backgroundColor: '#fff',
                                                        boxShadow: '0px 2px 4px 0px rgba(0,0,0,.06)',
                                                        height: '57px',
                                                        padding: '0 25px'
                                                    }} onClick={handlechuky} required={true} >
                                                    <option value="">Chu kỳ đóng tiền cước</option>
                                                    <option value="1">1 Month</option>
                                                    <option value="3">3 Month</option>
                                                </select>
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
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