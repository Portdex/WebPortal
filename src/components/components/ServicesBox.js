import React, { memo, useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as selectors from '../../store/selectors';
import { Link } from 'react-router-dom';
import fetchServices from '../pages/fetchServices';

//react functional component
const ServicesBox = () => {
    const [userData, setUserData] = useState([])
console.log(userData)

    useEffect(() => {
        
        fetchServices()
        .then(data => {
          data=data.data.results.service;
          setUserData(data)
 
        })
      }, []);
    //will run when component unmounted
   

    return (
        <div className='row'>
        { userData.map((item, index) => (
            <>
             {item.services && item.services.map((service, serviceIndex) => (
                <>
                { service.name ?
                  
            <div className=' col-lg-3 col-sm-6 col-md-6 p-0'>
                <Link
                  key={service.id}
                  to={`/servicedetail/${item.username}/${service.id}`}
                  style={{ textDecoration: 'none' }}
                >
            <div className='single-card m-2'>
            <div className='col-lg-12'>
                <img src='/img/code_logo.png' alt='' className='img-fit-none'/>
                <h6 className='m-3'>{item.username}</h6>
                <p className='m-3'>
               { service.name ? service.name : '-'}
                </p>
                <div className='row text-center align-items-center icon-style-text mx-0'>
<div className='col-lg-12 col-sm-12 col-12 p-3 cursor-pointer'>
    {/* <NavLink to={`/description/${item.id}`}> */}
    {/* <NavLink to={`/Author/${item.id}`}>  */}
<span className='text-blue'> View the packages </span>
{/* </NavLink> */}
</div>
</div>         
</div>
            </div>
            </Link>
            </div>

:
<></>
}
            </>
             ))}
            </>
        ))}
            </div>
                   
    );
};

export default memo(ServicesBox);