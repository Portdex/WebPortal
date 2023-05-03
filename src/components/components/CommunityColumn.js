import React, { memo } from 'react';
import api from '../../core/api';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


//react functional component
const CommunityColumn = ({ user }) => {
    const navigate = useNavigate();
    const Description =()=>{
        navigate(`/Author/${user.id}`)
        // navigate(`/description/${user.id}`)
    }
    return (
        <>
       
            <div className='single-card m-2'>
            <div className='col-lg-12'>
                <img src={api.baseUrl + user.avatar.url} className='img-fit lazy'/>
                <h6 className='m-3'>{user.username}</h6>
                <p className='m-3'>
                Sed ut perspiciatis unde omnis iste natus error sit.
                </p>
                <div className='row w-100 m-0'>
                    <div className='col-lg-6'>
                        <h6 className='m-3'>
                            Category
                        </h6>
                <p className='m-3'>
                {user.author_sale.category}
                </p>
                </div>
                <div className='col-lg-6'>
                <h6 className='m-3'>
                            Payment Method
                        </h6>
                <p className='m-3'>
                {user.author_sale.payment_method}
                </p>
                </div>
                </div>
                <div className='row text-center align-items-center icon-style-text mx-0'>
<div className='col-lg-6 col-sm-6 col-6 p-3 cursor-pointer'>
<span className='text-blue'> Chat </span>
</div>
{/* <div className='col-lg-4 col-sm-4 col-4 cursor-pointer'>
<span className='icon-style'> <i className='fa fa-shopping-cart'></i> </span>
</div> */}
<div className='col-lg-6 col-sm-6 col-6 p-3 cursor-pointer'>
<NavLink to={`/Author/${user.id}`}>
   
<span className='text-blue'> Preview </span>
</NavLink>
</div>
</div>         
</div>
            </div>
            
           
        {/* <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")}>
                  <img className="lazy" src={api.baseUrl + user.avatar.url} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
            </div>  
            <div className="author_list_info">
                <span onClick={()=> window.open("", "_self")}>{user.username}</span>
                <span className="bot">{user.author_sale.category} </span>
            </div>      */}
           
        </>     
    );
};

export default memo(CommunityColumn);