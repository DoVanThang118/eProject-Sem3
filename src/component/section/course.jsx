import { Link } from "react-router-dom";
import {SwiperSlide} from "swiper/react";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";

const courseList = [
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Private Car',
        price: '$329.00',
        duration: '4 Weeks',
        btnText: 'Buy Now',
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
// const courseList = [
//     {
//         imgUrl: 'assets/images/course/01.jpg',
//         imgAlt: 'course rajibraj91 rajibraj',
//         price: '$30',
//         cate: 'Adobe XD',
//         reviewCount: '03 reviews',
//         title: 'Fundamentals of Adobe XD Theory Learn New',
//         totalLeson: '18x Lesson',
//         schdule: 'Online Class',
//         authorImgUrl: 'assets/images/course/author/01.jpg',
//         authorImgAlt: 'course author rajibraj91 rajibraj',
//         authorName: 'William Smith',
//         btnText: 'Read More',
//     },
//     {
//         imgUrl: 'assets/images/course/02.jpg',
//         imgAlt: 'course rajibraj91 rajibraj',
//         price: '$30',
//         cate: 'Adobe XD',
//         reviewCount: '03 reviews',
//         title: 'Certified Graphic Design with Free Project Course',
//         totalLeson: '18x Lesson',
//         schdule: 'Online Class',
//         authorImgUrl: 'assets/images/course/author/02.jpg',
//         authorImgAlt: 'course author rajibraj91 rajibraj',
//         authorName: 'Lora Smith',
//         btnText: 'Read More',
//     },
//     {
//         imgUrl: 'assets/images/course/03.jpg',
//         imgAlt: 'course rajibraj91 rajibraj',
//         price: '$30',
//         cate: 'Adobe XD',
//         reviewCount: '03 reviews',
//         title: 'Theory Learn New Student And Fundamentals',
//         totalLeson: '18x Lesson',
//         schdule: 'Online Class',
//         authorImgUrl: 'assets/images/course/author/03.jpg',
//         authorImgAlt: 'course author rajibraj91 rajibraj',
//         authorName: 'Robot Smith',
//         btnText: 'Read More',
//     },
//     {
//         imgUrl: 'assets/images/course/04.jpg',
//         imgAlt: 'course rajibraj91 rajibraj',
//         price: '$30',
//         cate: 'Adobe XD',
//         reviewCount: '03 reviews',
//         title: 'Computer Fundamentals Basic Startup Ultricies Vitae',
//         totalLeson: '18x Lesson',
//         schdule: 'Online Class',
//         authorImgUrl: 'assets/images/course/author/04.jpg',
//         authorImgAlt: 'course author rajibraj91 rajibraj',
//         authorName: 'Zinat Zaara',
//         btnText: 'Read More',
//     },
//     {
//         imgUrl: 'assets/images/course/05.jpg',
//         imgAlt: 'course rajibraj91 rajibraj',
//         price: '$30',
//         cate: 'Adobe XD',
//         reviewCount: '03 reviews',
//         title: 'Boozy Halloween Drinks for the Grown Eleifend Kuismod',
//         totalLeson: '18x Lesson',
//         schdule: 'Online Class',
//         authorImgUrl: 'assets/images/course/author/05.jpg',
//         authorImgAlt: 'course author rajibraj91 rajibraj',
//         authorName: 'Rajib Raj',
//         btnText: 'Read More',
//     },
//     {
//         imgUrl: 'assets/images/course/06.jpg',
//         imgAlt: 'course rajibraj91 rajibraj',
//         price: '$30',
//         cate: 'Adobe XD',
//         reviewCount: '03 reviews',
//         title: 'Student Want to Learn About Science And Arts',
//         totalLeson: '18x Lesson',
//         schdule: 'Online Class',
//         authorImgUrl: 'assets/images/course/author/06.jpg',
//         authorImgAlt: 'course author rajibraj91 rajibraj',
//         authorName: 'Angel Mili',
//         btnText: 'Read More',
//     },
// ]

const Course = () => {
    return (
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-md-2 row-cols-1 ">
                        {courseList.map((val, i) => (
                            <SwiperSlide key={i}>
                                <div className="event-item style-2">
                                    <div className="event-inner">
                                        <div className="event-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="event-content">
                                            <h5>{val.title}</h5>
                                            <h2>{val.price}</h2>
                                            <span>{val.duration}</span>
                                            <ul className="lab-ul">
                                                {val.servList.map((val, i) => (
                                                    <li key={i}>{val.text}</li>
                                                ))}
                                            </ul>
                                            <Link to="/login" className="lab-btn"><span>{val.btnText}</span></Link>
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