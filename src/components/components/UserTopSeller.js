import React, { memo } from 'react';
import api from '../../core/api';
import { useNavigate } from 'react-router-dom';
import fetch from '../pages/fetch';
import { useState , useEffect } from 'react';


//react functional component
const UserTopSeller = ({ user }) => {
    const [userData , setUserData] = useState([]);
    const [loading , setLoading] = useState([]);
    const navigate = useNavigate();
    const Description =()=>{
        navigate(`/Author/${user.id}`)
        // navigate(`/description/${user.id}`)
    }
    useEffect(() => {
        setLoading(true)
        fetch()
        .then(data => {
          data=data.data.results.users;
          setUserData(data)
         setLoading(false)
        })
      }, []);
    return (
        <>
        <div onClick={Description} className="author_list_pp">
        <span>
            {/* <img className="lazy" src={api.baseUrl + user.avatar.url} alt=""/> */}
            <i className="fa fa-check"></i>
        </span>
      </div>                                    
      <div onClick={Description} className="author_list_info">
          <span>{userData.username}</span>
          {/* <span className="bot">{user.author_sale.category} </span> */}
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

export default memo(UserTopSeller);