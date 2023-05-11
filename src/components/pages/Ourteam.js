import React, { memo, useEffect , useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";
import fetch from "./fetch";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;
const Ourteam = () =>
{
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(userData)
    const navigate = useNavigate();
      const dispatch = useDispatch();
      const authorsState = useSelector(selectors.authorsState);
      const authors = authorsState.data ? authorsState.data : [];
  
      useEffect(() => {
          
          fetch()
          .then(data => {
            data=data.data.results.users;
            setUserData(data)
           
          })
        }, []);
    return (
       
        <div>
            <GlobalStyles/>
         <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12'>
                <h1 className='text-center'>Our Team </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
       

   <div class="row">
     {/* <!-- Column 1--> */}
     
     <div  class="col-lg-4 p-5">
       <div className='community-column text-center'>
       
       <div class="community-card p-3">
         <div class="img-container">
           <img src="img/favicon.ico" />
         </div>
         <h3 className="community-h3 mb-2">Muhammad</h3>
         <p className="m-0 mb-2"></p>
         <div class="community-icons">
     

         </div>
       </div>
       
       </div>
     </div>
     
    
     {/* <!-- Column 2--> */}
   </div>
 
     </div>

    )
}
export default Ourteam