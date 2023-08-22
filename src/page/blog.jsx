import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/sidebar/pagination";
import React, { useContext, useState, useEffect } from "react";
import {getallofuser} from "../services/contract.service";
import UserContext from "../store/context";
import { useNavigate } from "react-router-dom";





const BlogPage = () => {

    const navigate = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    const[con,setCon] = useState([]);
    const findContract = async () => {
        dispatch({ type: "SHOW_LOADING" });
        const con = await getallofuser(state.userlogin.id);
        setCon(con);
        dispatch({ type: "HIDE_LOADING" });
      };
      
      useEffect(() => {
        findContract();
      }, []);

   console.log(con);
   console.log(state.userlogin.id);



    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'My Pack Data'} curPage={'My Pack Data'} />
            <div className="blog-section padding-tb section-bg">
                <div className="container">
                <Link to="/"><img src="assets/images/logo/01.png" alt="logo"  width={120} borderRadius={20} style={{objectFit:'cover',borderRadius:20, marginTop:-890}} /></Link>

                    
                    <div className="section-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                            {con.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="post-item">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <img src={val.packdata.thumnail}/>
                                                <h4 style={{textAlign:"center"}}>Pack Data Name {val.packdata.name}</h4>
                                            </div>
                                            <div className="post-content">
                                                <p>Content: {val.packdata.description}</p>
                                            </div>
                                            <div className="post-footer">
                                                    <p>Price 1 Month :{val.packdata.gia1thang}</p>
                                                    <p>Price 1 Quarter :{val.packdata.gia1quy}</p>
                                                    <p>Ngày tạo hợp đồng: {new Date(val.ngaytaohopdong).toLocaleDateString()}</p>
                                                    <p>Trạng thái hợp đồng: {(val.status==0)?<div className="p-content">Chờ kiểm tra lắp đặt</div>
                                               :(val.status==1)?<div className="p-content">Mời thanh toán</div>
                                               :(val.status==2)?<div className="p-content">Thanh toán thành công chờ duyệt thiết bị lắp đặt</div>
                                                :(val.status==3)?<div className="p-content">Duyệt thiết bị thành công đang lắp đặt</div>
                                                :(val.status==4)?<div className="p-content">Lắp đặt thành công mời sử dụng</div>
                                                :(val.status==5)?<div className="p-content">Rất xin lỗi không lắp đặt được tại địa chỉ quý khách cung cấp</div>
                                                :<p></p>
                                            
                                            }</p>
                                                
                                            </div>
                                            <div  style={{display:"flex",justifyContent:"center"}}>
                                                    <div>
                                                    <Link to={"profile/"+val.id} className="lab-btn"><span>DETAIL</span></Link>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default BlogPage;