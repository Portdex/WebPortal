import React, { memo } from 'react';
import api from '../../core/api';
import { useNavigate } from 'react-router-dom';



//react functional component
const UserTopSeller = ({ user }) => {
    const navigate = useNavigate();
    const Description =()=>{
        navigate(`/Author/${user.id}`)
        // navigate(`/description/${user.id}`)
    }
    return (
        <>
        <div onClick={Description} className="author_list_pp">
        <span>
            <img className="lazy" src={api.baseUrl + user.avatar.url} alt=""/>
            <i className="fa fa-check"></i>
        </span>
      </div>                                    
      <div onClick={Description} className="author_list_info">
          <span>{user.username}</span>
          <span className="bot">{user.author_sale.category} </span>
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