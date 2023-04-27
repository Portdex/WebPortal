import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { carouselNew } from './constants';
const catgor= () => (
    <div className='nft'>
    <Slider {...carouselNew}>
       
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
            {/* <i className="fa fa-download"></i> */}
            <img src='/img/gallery/downloads.png' className='mx-auto'/>
            <span>Digital Downloads</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
          <img src='/img/gallery/logos.png' className='mx-auto'/>
            <span>Logos</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
          <img src='/img/gallery/themes.png' className='mx-auto'/>
            <span>Themes</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
          <img src='/img/gallery/pdf.png' className='mx-auto'/>
            <span>Pdf Documents</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
        <img src='/img/gallery/downloads.png' className='mx-auto'/>
            <span>Membership</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
        <img src='/img/gallery/ebooks.png' className='mx-auto'/>
            <span>Ebooks</span>
        </Link>
    </div>
    
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
        <img src='/img/gallery/courses.png' className='mx-auto'/>
            <span>Courses</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
            <img src='/img/gallery/webinars.png' className='mx-auto'/>
            <span>Webinars</span>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 px-3">
        <Link className="icon-box style-2 rounded" to="">
        <img src='/img/gallery/workshop.png' className='mx-auto'/>
            <span>Workshop</span>
        </Link>
    </div>
    
   
    </Slider>
    </div>
  
);
export default catgor;