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
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Form đăng kí'} curPage={'Blog Detais'} />
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
                                     <h4 className="title-border">form đăng kí</h4>
                                     <div className="add-comment">
                                         <form action="#" method="post" id="commentform" className="contact-form">
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
                                             <div className="w-100"><h4>Personal information</h4></div>
                                             <div className="form-group">
                                                 <input type="text" className="form-control" placeholder="Your Name *" required={true}/>
                                             </div>
                                             <div className="form-group">
                                                 <input type="number" className="form-control" placeholder="Mobile Number *" required={true}/>
                                             </div>

                                             <div className="w-100"><h4>Enter address</h4></div>
                                             <div className="form-group">
                                                 <div className="select-item">
                                                     <SelectCatagory select={'all'} />
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="form-group">
                                                 <div className="select-item">
                                                     <SelectLanguage select={'all'} />
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="form-group">
                                                 <div className="select-item">
                                                     <PriceSelect select={'all'} />
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="form-group">
                                                 <div className="select-item">
                                                     <SkillSelect select={'all'} />
                                                     <div className="select-icon">
                                                         <i className="icofont-rounded-down"></i>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="form-group w-100">
                                                 <input type="text" className="form-control" placeholder="Address *" required={true}/>
                                             </div>
                                             <div className="form-group w-100">
                                                 <input type="text" className="form-control" placeholder="Address 2"/>
                                             </div>
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