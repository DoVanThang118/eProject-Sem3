import React, { useContext, useState, useEffect } from "react";
import {getsearch} from "../../services/packdata.service";
import UserContext from "../../store/context";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";


const subTitle = "Cheap internet for students";
const title = <h2 className="title"><span className="d-lg-block">Internet Strong</span>You Need<span className="d-lg-block"></span></h2>;
const desc = "Gói cước Super 30M được FPT nâng băng thông từ gói cước Super 25M để đáp ứng nhu cầu thiết yếu người dùng.Super 30 là gói internet FPT rẻ nhất được áp dụng tại Hà Nội và HCM với cước chỉ 190.000 đ/tháng, quý khách sẽ được trải nghiệm gói internet tốc độ lên đến 30 Mbps.";


const catagoryList = [
    {
        name: 'Figma',
        link: '#',
    },
    {
        name: 'Adobe XD',
        link: '#',
    },
    {
        name: 'illustration',
        link: '#',
    },
    {
        name: 'Photoshop',
        link: '#',
    },
]


const shapeList = [
    {
        name: '16M Students Happy',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '130K+ Total Courses',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '89% Successful Students',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '23M+ Learners',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: '36+ Languages',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]

const Banner = () => {
    const { state, dispatch } = useContext(UserContext);
    const [search, setSearch] = useState({name: ""});
    const[packdata,setPack] = useState([]);
    const handleChange = (event) => {
      search[event.target.name] = event.target.value;
      setSearch(search);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const t = await getsearch(search);
      setPack(t);
      
    };
    console.log(packdata);



    return (
        <section className="banner-section">
            <div className="container">
 <Link to="/"><img src="assets/images/logo/01.png" alt="logo"  width={120} borderRadius={20} style={{objectFit:'cover',borderRadius:20, marginTop:-190}} /></Link>


                <div className="section-wrapper">

                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <p className="desc">{desc}</p>
                                <form action="#" onSubmit={handleSubmit}>
                                    <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div>
                                    <input onChange={handleChange} type="text" name ="name" placeholder="Keywords of your pack data" />
                                    <button type="submit">Search Data</button>
                                </form>

                      

                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                                <img src="assets/images/banner/01.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            <div className="section-wrapper" style={{marginTop:30}}>
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-md-2 row-cols-1 ">
                    {packdata.map((val, i) => (
                                <SwiperSlide key={i} style={{ borderRadius:20}}>
                                    <div className="event-item style-2 h-100" >
                                        <div className="event-inner">
                                            <div className="event-thumb" style={{height:160}}>
                                                <img src={val.thumnail} />
                                            </div>
                                            <div className="event-content">
                                                <h5>{val.name}</h5>
                                                <h2>{val.typename}</h2>
                                                <span>{val.description}</span>
                                                <p>Prie 1 Month: {val.gia1thang}</p>
                                                <p>Prie 1 Quarter: {val.gia1quy}</p>
                                                {(state.userlogin!=null)?<Link to={"formcontract/"+val.id} className="lab-btn"><span>SUBSCRIBE</span></Link>:<Link to="/login" className="lab-btn"><span>SUBSCRIBE</span></Link> }
                                                
                                                

                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </div>
                </div>
        </section>
    );
}
 
export default Banner;