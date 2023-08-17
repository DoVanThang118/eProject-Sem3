import {Fragment} from "react";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Footer from "../component/layout/footer";
import SelectCatagory from "../component/sidebar/selectCatagory";
import SelectLanguage from "../component/sidebar/select-language";
import PriceSelect from "../component/sidebar/price-select";
import SkillSelect from "../component/sidebar/skill-select";


const FormInput = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'REGISTRATION INFORMATION'} curPage={'Form'} />
            <div className="instructor-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <form className="contact-form">

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
            <Footer />
        </Fragment>
    );
}

export default FormInput;