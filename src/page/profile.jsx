import { Fragment } from "react";

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Progress from "../component/sidebar/progress";
import Rating from "../component/sidebar/rating";
import React, { useContext, useState, useEffect } from "react";
import {find} from "../services/contract.service";
import {updatepayment} from "../services/contract.service";

import UserContext from "../store/context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";

const name = "Profile";
const degi = "Master of Education Degree";
const desc = "Infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables";
const subTitle = "Personal Statement";
const infoDetails = "Bạn đến với chúng tôi đó là niềm vui và rất được phục vụ quý khách nếu có vấn đề gì hãy gọi cho chúng tôi qua đường dây nóng, hoặc qua email.";
const skillTitle = "Personal Language Skill";
const awardTitle = "Recognitions Award";

const memInfoLisst = [
    {
        leftText: 'Adress',
        rightText: 'số 8 Tôn thất thuyết',
    },
    {
        leftText: 'Email',
        rightText: 'emileelogan@gamil.com',
    },
    {
        leftText: 'Phone',
        rightText: '0329.226.456',
    },
    {
        leftText: 'loại gói',
        rightText: 'combo internet and dia-up',
    },
    {
        leftText: 'Thời gian',
        rightText: '6 tháng',
    },
    {
        leftText: 'Hotline',
        rightText: '1900.089238',
    },
]

const memSocialList = [
    {
        iconName: 'icofont-twitter',
        className: 'twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-instagram',
        className: 'instagram',
        siteLink: '#',
    },
    {
        iconName: 'icofont-basketball',
        className: 'basketball',
        siteLink: '#',
    },
    {
        iconName: 'icofont-vimeo',
        className: 'vimeo',
        siteLink: '#',
    },
    {
        iconName: 'icofont-behance',
        className: 'behance',
        siteLink: '#',
    },
]

const skillList = [
    {
        percentage: '80',
        text: 'English'
    },
    {
        percentage: '70',
        text: 'Hindi'
    },
    {
        percentage: '90',
        text: 'Bangla'
    },
    {
        percentage: '50',
        text: 'Arabic'
    },
]

const awardList = [
    {
        imgUrl: 'assets/images/instructor/single/icon/01.png',
        imgAlt: 'instructor',
        text: 'Award 2018',
    },
    {
        imgUrl: 'assets/images/instructor/single/icon/02.png',
        imgAlt: 'instructor',
        text: 'Award 2019',
    },
    {
        imgUrl: 'assets/images/instructor/single/icon/03.png',
        imgAlt: 'instructor',
        text: 'Award 2020',
    },
    {
        imgUrl: 'assets/images/instructor/single/icon/04.png',
        imgAlt: 'instructor',
        text: 'Award 2022',
    },
]

const Profile = () => {
    const navigate = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    const [contract, setContract] = useState({});
    const {id} = useParams();
    const[packdata ,setPackData] = useState({});

    const findContract = async ()=>{
        const con = await find(id);
        setContract(con);
        setPackData(con.packdata);
    }
    console.log(contract);


    useEffect(()=>{
        findContract();
        },[]);
        const successPaymentHandler = async ()=>{
            dispatch({type:"SHOW_LOADING"});

           const t = await updatepayment(contract.id);
            dispatch({type:"HIDE_LOADING"});
          }

          console.log(contract.id);



    return (
        <Fragment>
            <Header />
            <PageHeader title={'Contract Profile'} curPage={'Contract Profile'} />
            <section className="instructor-single-section padding-tb section-bg">
                <div className="container">
                    <div className="instructor-wrapper">
                        <div className="instructor-single-top">
                            <div className="instructor-single-item d-flex flex-wrap justify-content-between">
                                <div className="instructor-single-thumb">
                                    <img src="../../assets/images/instructor/single/01.jpg" alt="instructor" />
                                </div>
                                <div className="instructor-single-content">
                                    <h4 className="title">Name</h4>
                                    <p className="ins-dege">{contract.customername}</p>
                                    <Rating />
                                    <p className="ins-desc">{desc}</p>
                                   
                                    <ul className="lab-ul">
                                        
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Address</span>
                                                <span className="list-attr">{contract.address} </span>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Email </span>
                                                <span className="list-attr">{contract.email}</span>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Phone Number </span>
                                                <span className="list-attr">{contract.tel}</span>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Pack Data </span>
                                                <span className="list-attr">{packdata.name}</span>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Price 1 Month </span>
                                                <span className="list-attr">{packdata.gia1thang}</span>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Price 1 Quar1er </span>
                                                <span className="list-attr">{packdata.gia1quy}</span>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Chu kỳ </span>
                                                <span className="list-attr">{contract.chukydongtien}</span>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Content PackData </span>
                                                <span className="list-attr">{packdata.description}</span>
                                            </li>
                                             <li className="d-flex flex-wrap justify-content-start">
                                                <span className="list-name">Hotline</span>
                                                <span className="list-attr">1900000009</span>
                                            </li>

                                         
                                           
                                        
                                        <li className="d-flex flex-wrap justify-content-start">
                                            <span className="list-name">Follow Us</span>
                                            <ul className="lab-ul list-attr d-flex flex-wrap justify-content-start">
                                                {memSocialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a className={val.className} href={val.siteLink}><i className={val.iconName}></i></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <div>
                                        <p className="ins-desc">{infoDetails}</p>
                                        </div>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
             <div className="shop-cart padding-tb">
                <div>
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                     <tr>
                                        <th className="cat-product">Ngày tạo hợp đồng</th>
                                        <th className="cat-price">Ngày bắt đầu</th>
                                        <th className="cat-price"style={{textAlign:"left"}}>Ngày kết thúc</th>
                                        <th className="cat-toprice">Gía trị hợp đồng</th>
                                        <th className="cat-edit">Trạng thái</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="product-item cat-product">
                                                <div className="p-content">
                                                {(contract.ngaytaohopdong!=null)?new Date(contract.ngaytaohopdong).toLocaleDateString():<></>}
                                                </div>
                                            </td>
                                            <td className="cat-price"> {(contract.ngaybatdausudung!=null)?new Date(contract.ngaybatdausudung).toLocaleDateString():<></>}</td>
                                            <td className="cat-price"> {(contract.ngayhethan!=null)?new Date(contract.ngayhethan).toLocaleDateString():<></>}</td>
                                            <td className="cat-toprice">{contract.giatrihopdong} USD</td>
                                            <td className="cat-edit">
                                               {(contract.status==0)?<div className="p-content">Chờ kiểm tra lắp đặt</div>
                                               :(contract.status==1)?<div className="p-content">Mời thanh toán</div>
                                               :(contract.status==2)?<div className="p-content">Thanh toán thành công chờ lắp đặt</div>
                                                :(contract.status==3)?<div className="p-content">Lắp đặt thành công mời sử dụng</div>
                                                :(contract.status==4)?<div className="p-content">Mời quý khách đóng phí</div>
                                                :(contract.status==5)?<div className="p-content">Rất xin lỗi không lắp đặt được tại địa chỉ quý khách cung cấp</div>
                                                :<p></p>
                                            
                                            }
                                            </td>
                                           
                                    </tr>
                                    <tr>
                                    {/* <td className="product-item cat-product">
                                                <div className="p-content">
                                                    22/08/2023
                                                </div>
                                            </td>
                                            <td className="cat-price" > 22/08/2023</td>
                                            <td className="cat-price"> 22/08/2023</td>
                                            <td className="cat-toprice">1000000</td>
                                            <td className="cat-edit">
                                                <a href="#">Thông báo sự cố</a>
                                    </td> */}
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>

                        <div className="cart-top" style={{display:"flex",justifyContent:"center",marginTop:20}}>

                        {
                                                    (contract.status==1)?
                                                    <div className="p-content">
                                                        <div style={{textAlign:"center",marginBottom:30,marginTop:30}}>
                                                        <h4>Mời Quý Khách {contract.customername} Thanh Toán </h4>
                                                        <h4>Total Money: {contract.giatrihopdong} USD </h4>

                                                        </div>
                                                       

                                                            <PayPalButton
                                                            options={{
                                                                "vault": true,
                                                                "client-id": "AR86XShHEggIM0YzMF6FdymWDWPkpjh7mx-PDVlwis1Ve0HRniLtcaaIjPLMDDw-MZPi89PNeLAmuKrd"
                                                            }}

                                                            amount={contract.giatrihopdong}
                                                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                            onSuccess={successPaymentHandler} />
                                                        
                                                    </div>

                                                    :<div></div>
                                                }
                        </div>
                        
                    </div>
                </div>
            </div>
               </div>
                 </div>
            </section>
            <Footer />
        </Fragment>
    );
}
 
export default Profile;