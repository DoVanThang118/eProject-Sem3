import { Fragment } from "react";

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Progress from "../component/sidebar/progress";
import Rating from "../component/sidebar/rating";

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
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Profile'} curPage={'Profile'} />
            <section className="instructor-single-section padding-tb section-bg">
                <div className="container">
                    <div className="instructor-wrapper">
                        <div className="instructor-single-top">
                            <div className="instructor-single-item d-flex flex-wrap justify-content-between">
                                <div className="instructor-single-thumb">
                                    <img src="assets/images/instructor/single/01.jpg" alt="instructor" />
                                </div>
                                <div className="instructor-single-content">
                                    <h4 className="title">Name</h4>
                                    <p className="ins-dege">{degi}</p>
                                    <Rating />
                                    <p className="ins-desc">{desc}</p>
                                   
                                    <ul className="lab-ul">
                                        {memInfoLisst.map((val, i) => (
                                            <li className="d-flex flex-wrap justify-content-start" key={i}>
                                                <span className="list-name">{val.leftText}</span>
                                                <span className="list-attr">{val.rightText}</span>
                                            </li>
                                        ))}
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
                                                    22/08/2023
                                                </div>
                                            </td>
                                            <td className="cat-price"> 22/08/2023</td>
                                            <td className="cat-price"> 22/08/2023</td>
                                            <td className="cat-toprice">1000000</td>
                                            <td className="cat-edit">
                                                <a href="#">Thanh toán ngay</a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="product-item cat-product">
                                                <div className="p-content">
                                                    22/08/2023
                                                </div>
                                            </td>
                                            <td className="cat-price" > 22/08/2023</td>
                                            <td className="cat-price"> 22/08/2023</td>
                                            <td className="cat-toprice">1000000</td>
                                            <td className="cat-edit">
                                                <a href="#">Thông báo sự cố</a>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
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