import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/thunks';
import { clearNfts, clearFilter , filterproductmarket } from '../../store/actions';
import { productmarket } from './constants/filters';
import NftCard from './NftCard';
import NftMusicCard from './NftMusicCard';
import { shuffleArray } from '../../store/utils';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import fetchServices from '../../data/fetchServices';

//react functional component
const ProductBox = () => {
//     const [userData, setUserData] = useState([])
// console.log(userData)
const userData = [
    { id: 1 , label: 'Ultimate-Responsive Website', img:'/img/product/website.jpg' },
    { id: 2 , label: 'Logo-Responsive Template', img:'/img/product/logo.jpg' },
    { id: 3 , label: 'Themes-Wordpress Templates', img:'/img/product/theme.jpg' },
    { id: 4 , label: 'Wordpress Plugin Development', img:'/img/product/plugins.jpg' },
    { id: 5 , label: 'Pdf Reader', img:'/img/product/pdf.png' },
    { id: 6 , label: 'Course Builder-Online Courses' , img:'/img/product/courses.jpg'},
    { id: 7 , label: 'Web Design Agency' , img:'/img/product/designs.png'},
    { id: 8 , label: 'Responsive Ebook Landing Page ', img:'/img/product/ebooks.jpg' }
  ]
  
    // useEffect(() => {
        
    //     fetchServices()
    //     .then(data => {
    //       data=data.data.results.service;
    //       setUserData(data)
 
    //     })
    //   }, []);
    //will run when component unmounted
   

    return (
        <div className='row'>
        { userData.map((item, index) => (
            <div className=' col-lg-4 col-sm-6 col-md-6 p-0'>
            <div className='single-card m-2'>
            <div className='col-lg-12'>
                <div className='wow-image'>
                <img src={item.img} className='img-hover-zoom img-fit-cover'/>
                </div>
                <h6 className='m-3'>{item.label}</h6>
                <p className='m-3'>
                Sed ut perspiciatis unde omnis iste natus error sit.
                </p>
                <div className='row text-center align-items-center icon-style-text mx-0'>
{/* <div className='col-lg-6 col-sm-6 col-6 p-3 cursor-pointer'>
<span className='text-blue'> Chat </span>
</div> */}
{/* <div className='col-lg-4 col-sm-4 col-4 cursor-pointer'>
<span className='icon-style'> <i className='fa fa-shopping-cart'></i> </span>
</div> */}
<div className='col-lg-12 col-sm-12 col-12 p-3 cursor-pointer'>
    {/* <NavLink to={`/description/${item.id}`}> */}
    <NavLink to={`/productdetail/${item.id}`}> 
<span className='text-blue'> View the packages </span>
</NavLink>
</div>
</div>         
</div>
            </div>
            </div>
        ))}
            </div>
                   
    );
};

export default memo(ProductBox);