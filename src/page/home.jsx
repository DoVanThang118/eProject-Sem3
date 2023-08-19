import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Blog from "../component/section/blog";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";

import EventTwo from "../component/section/event-2";
import React, { useContext, useState, useEffect } from "react";
import {get} from "../services/packdata.service";
import UserContext from "../store/context";



const Home = () => {

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

   console.log(packdata);
    return (
        <Fragment>
        <Header />
        <Banner />
        {/*<Sponsor />*/}
        {/*<Category />*/}
        <EventTwo />
        <Course />
        {/*<About />*/}
        {/*<Instructor />*/}
        {/*<Student />*/}
        {/*<Blog />*/}
        <Achievement />
        <Footer />
    </Fragment>
    );
}
 
export default Home;