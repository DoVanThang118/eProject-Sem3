
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useContext, useState, useEffect } from "react";
import { getoutstanding} from "../../services/packdata.service";
import UserContext from "../../store/context";



const subTitle = "Don’t Miss the Day";
const title = "Upcomming Events";


const eventSliderList = [
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Private Car',
        price: '$329.00',
        duration: '4 Weeks',
        btnText: 'Read More',
        servList: [
            {
                text: 'Driving License',
            },
            {
                text: '15 Classroom Lessons',
            },
            {
                text: '10 In-Car Lessons',
            },
            {
                text: 'Medical Service',
            },
            {
                text: 'FREE final exam',
            },
            {
                text: 'With MTO Certification',
            },
        ],
    },
    {
        imgUrl: 'assets/images/event/02.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Private Car',
        price: '$329.00',
        duration: '4 Weeks',
        btnText: 'Read More',
        servList: [
            {
                text: 'Driving License',
            },
            {
                text: '15 Classroom Lessons',
            },
            {
                text: '10 In-Car Lessons',
            },
            {
                text: 'Medical Service',
            },
            {
                text: 'FREE final exam',
            },
            {
                text: 'With MTO Certification',
            },
        ],
    },
    {
        imgUrl: 'assets/images/event/03.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Private Car',
        price: '$329.00',
        duration: '4 Weeks',
        btnText: 'Read More',
        servList: [
            {
                text: 'Driving License',
            },
            {
                text: '15 Classroom Lessons',
            },
            {
                text: '10 In-Car Lessons',
            },
            {
                text: 'Medical Service',
            },
            {
                text: 'FREE final exam',
            },
            {
                text: 'With MTO Certification',
            },
        ],
    },
    {
        imgUrl: 'assets/images/event/04.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Private Car',
        price: '$329.00',
        duration: '4 Weeks',
        btnText: 'Read More',
        servList: [
            {
                text: 'Driving License',
            },
            {
                text: '15 Classroom Lessons',
            },
            {
                text: '10 In-Car Lessons',
            },
            {
                text: 'Medical Service',
            },
            {
                text: 'FREE final exam',
            },
            {
                text: 'With MTO Certification',
            },
        ],
    },
]

const EventTwo = () => {

    const {state,dispatch} = useContext(UserContext);
const [packdata, setPackData] = useState([]);
const getPack = async ()=>{
    dispatch({type:"SHOW_LOADING"});
    const pack = await getoutstanding();
    setPackData(pack);
    dispatch({type:"HIDE_LOADING"});

  }
  useEffect(()=>{
   getPack();
    
   },[]);
    return (
        <div className="event-section style-2 padding-tb section-bg-ash">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle yellow-color">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="event-navi-item event-slider-next"><i className="icofont-rounded-double-right"></i></div>
                    <div className="event-navi-item event-slider-prev"><i className="icofont-rounded-double-left"></i></div>
                    <div className="event-sliders overflow-hidden">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={'true'}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.event-slider-prev',
                                nextEl: '.event-slider-next',
                            }}
                            modules={[Autoplay, Navigation]}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 3.7,
                                },
                            }}
                        >
                            {packdata.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="event-item style-2 h-100" >
                                        <div className="event-inner">
                                            <div className="event-thumb" style={{height:200}}>
                                                <img src={val.thumnail} />
                                            </div>
                                            <div className="event-content">
                                                <h5>{val.name}</h5>
                                                <h4>{val.typename}</h4>
                                                <span>{val.description}</span>
                                                <p>Price: {val.gia1thang} USD/Month</p>
                                                <p>Price: {val.gia1quy} USD/Quarter</p>
                                                
                                                {(state.userlogin!=null)?<Link to={"formcontract/"+val.id} className="lab-btn"><span> SUBSCRIBE</span></Link>:<Link to="/login" className="lab-btn"><span>SUBSCRIBE</span></Link> }
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EventTwo;