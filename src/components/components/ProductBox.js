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
import fetchServices from '../pages/fetchServices';

//react functional component
const ProductBox = () => {
//     const [userData, setUserData] = useState([])
// console.log(userData)
const userData = [
    { value: 'Website', label: 'Website', img:'/img/product/website.jpg' },
    { value: 'Logo', label: 'Logo', img:'/img/product/logo.jpg' },
    { value: 'Themes', label: 'Themes', img:'/img/product/theme.jpg' },
    { value: 'Plugins', label: 'Plugins', img:'/img/product/plugins.jpg' },
    { value: 'Pdf', label: 'Pdf', img:'/img/product/pdf.png' },
    { value: 'Courses', label: 'Courses' , img:'/img/product/courses.jpg'},
    { value: 'Designs', label: 'Designs' , img:'/img/product/designs.png'},
    { value: 'Ebook', label: 'Ebook', img:'/img/product/ebooks.jpg' }
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
    {/* <NavLink to={`/Author/${item.id}`}>  */}
<span className='text-blue'> View the packages </span>
{/* </NavLink> */}
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