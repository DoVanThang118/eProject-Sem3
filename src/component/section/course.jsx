import { Link } from "react-router-dom";
import {SwiperSlide} from "swiper/react";
import React, { useContext, useState, useEffect } from "react";
import {get} from "../../services/packdata.service";
import UserContext from "../../store/context";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";



const Course = () => {
    
    const {state,dispatch} = useContext(UserContext);
const [packdata, setPackData] = useState([]);
const getPack = async ()=>{
    dispatch({type:"SHOW_LOADING"});
    const pack = await get();
    setPackData(pack);
    dispatch({type:"HIDE_LOADING"});

  }
  useEffect(()=>{
   getPack();
    
   },[]);
    return (
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-md-2 row-cols-1 ">
                    {packdata.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="event-item style-2 h-100" >
                                        <div className="event-inner">
                                            <div className="event-thumb" style={{height:160}}>
                                                <img src={val.thumnail} />
                                            </div>
                                            <div className="event-content">
                                                <h5>{val.name}</h5>
                                                <h4>{val.typename}</h4>
                                                <span>{val.description}</span>
                                                <p>Price: {val.gia1thang} USD/Month</p>
                                                <p>Price: {val.gia1quy} USD/Quarter</p>
                                                {(state.userlogin!=null)?<Link to={"formcontract/"+val.id} className="lab-btn"><span>SUBSCRIBE</span></Link>:<Link to="/login" className="lab-btn"><span>SUBSCRIBE</span></Link> }
                                                
                                                

                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Course;