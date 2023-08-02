import React, { memo,useState,  useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import * as selectors from '../../store/selectors';
import api from "../../core/api";
import * as Yup from 'yup';
import auth , { authorUrl }from "../../core/auth";
import request from '../../core/auth/request';
import { useNavigate, useParams } from 'react-router-dom';
import fetch from "./fetch";
import { Link } from "react-router-dom";
import axios from "axios";
import fetchServices from "./fetchServices";
import Sidebars from "../menu/sidebar";
import Packages from "../components/Packages";
import WebSidebar from "../menu/webSidebar";
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
  }
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
  }
  .navbar {
    display: none;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;
const validationSchema = Yup.object().shape({
  username: Yup.lazy(() =>
    Yup.string()
      .required('Username is required')
  ),
  wallet: Yup.lazy(() =>
    Yup.string()
      .required('Wallet is required')
  ),
});

const Author2 = ({ authorId }) => {
  const { username } = useParams();
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState([])
  const [serviceData, setServiceData] = useState([])
  console.log(serviceData)
  console.log(userData)
  const [loading , setLoading]= useState(false)
const [openMenu, setOpenMenu] = React.useState(false);
const [openMenu1, setOpenMenu1] = React.useState(false);
const [openMenu2, setOpenMenu2] = React.useState(true);
const [openMenu3, setOpenMenu3] = React.useState(true);
 const navigate = useNavigate();
    const jwt = auth.getToken();
    const authorsState = useSelector(selectors.authorsState);
const author = authorsState.data ? authorsState.data[0] : {};
    const initialValues = {
        // username: author ? author.username : '',
        // about: author ? author.about : '',
        // social: author ? author.author_sale.category : '',
        // wallet: author ? author.author_sale.payment_method : ''
    };

    const initialProfilePicture = {
        profile_image: ''
    }
    
    const initialProfileBanner = {
        profile_banner: ''
    }

    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    const redirectUser = (path) => {
        navigate(path);
    }

    const handleSubmitForm = async (data) => {
        const requestURL = authorUrl(authorId);
    
        await request(requestURL, { method: 'PUT', body: data})
        .then((response) => {
            console.log(response)
            redirectUser(`/Author/${authorId}`);
        }).catch((err) => {
            console.log(err);
        });
    }
    
    const handleSubmitProfilePicture = async (file, field) => {

        var formData = new FormData()

        formData.append('files', file)
        formData.append('ref', 'author') // link the image to a content type
        formData.append('refId', authorId) // link the image to a specific entry
        formData.append('field', field) // link the image to a specific field

        await axios({
            method: 'post',
            url : `${api.baseUrl}/upload`,
            data: formData,
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            redirectUser(`/Author/${authorId}`);
            console.log(res);
        }).catch(err => {
            console.log(err)
        });
    }

    const [profileImage, setProfileImage] = useState();
    const [profileImageTemp, setProfileImageTemp] = useState();
    const [profileBanner, setProfileBanner] = useState();
    const [profileBannerTemp, setProfileBannerTemp] = useState();

    const handleProfilePicture = (event) => {
        let file = event.target.files[0];
        setProfileImage(file)
        let reader = new FileReader();
        reader.onloadend = () => {
            setProfileImageTemp(reader.result)
        };
        reader.readAsDataURL(file);
    }
    const renderDescription = (html) => {
      const div = document.createElement('div');
      div.innerHTML = html;
  
      const pElement = div.getElementsByTagName('p')[0];
      const liElements = div.getElementsByTagName('li');
      const replaceNbsp = (text) => text.replace(/&nbsp;/g, ' ');
      return (
        <div>
          {pElement && <p>{replaceNbsp(pElement.innerHTML)}</p>}
          {liElements.length > 0 && (
            <ul>
              {Array.from(liElements).map((liElement, index) => (
              <li key={index}>{replaceNbsp(liElement.innerHTML)}</li>
              ))}
            </ul>
          )}
        </div>
      );
    };
    const handleProfileBanner = (event) => {
        let file = event.target.files[0];
        setProfileBanner(file)
        let reader = new FileReader();
        reader.onloadend = () => {
            setProfileBannerTemp(reader.result)
        };
        reader.readAsDataURL(file);
    }
    useEffect(() => {
      setLoading(true)
      fetch()
      .then(data => {
        data=data.data.results.users;
        const product = data.find((product) => product.username  === username);
          setUserData(product)
       setLoading(false)
      })
      fetchServices()
      .then(data => {
        data=data.data.results.service;
        const product = data.find((product) => product.username  === username);
          setServiceData(product)
       setLoading(false)
      })
      window.scrollTo(0, 0);
    }, []);
  //   useEffect(() => {
  //     dispatch(fetchAuthorList(authorId));
  // }, [dispatch, authorId]);
    
  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
    setOpenMenu1(false);
    setOpenMenu2(false);
    setOpenMenu3(false);
    document.getElementById("Mainbtn").classList.add("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
    document.getElementById("Mainbtn3").classList.remove("active");
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
    setOpenMenu2(false);
    setOpenMenu(false);
    setOpenMenu3(false);
    document.getElementById("Mainbtn1").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
    document.getElementById("Mainbtn3").classList.remove("active");
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
    setOpenMenu(false);
    setOpenMenu1(false);
    setOpenMenu3(false);
    document.getElementById("Mainbtn2").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn3").classList.remove("active");
  };
  const handleBtnClick3 = () => {
    setOpenMenu3(!openMenu3);
    setOpenMenu(false);
    setOpenMenu2(false);
    setOpenMenu1(false);
    document.getElementById("Mainbtn3").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
  };
  




return (
 <>
<Sidebars/>
<div className="containerchat">
<GlobalStyles/>
  {/* { author.banner && 
    <section id='profile_banner' className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${api.baseUrl + author.banner.url})`}}>
      <div className='mainbreadcumb'>
      </div>
    </section>
  } */}


    <div className="margin-left-sidebar p-0 responsive-flex">
    
    <div className="chat">
      <div className="height-contain">
      <div className="chat-messages responsive-space d-flex justify-content-center flex-column">
      <section className="no-bottom">
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-2">
        <div className="profile_avatar ui-icon icon profile-height">
                   
                   <img src='/img/favicon.ico' alt=""/>
                
                   <i className="fa fa-check"></i>
                   
               </div>
        </div>
        <div className="col-md-10">
        <div className="profile_name">
                          <h4>
                            {userData.username}      
                                                          
                              <span className="profile_username">{userData.mail}</span>
                              <span className="profile_username text-muted">{userData.services}</span>
                              {
                              userData.payment_method && userData.payment_method.map((item, index) => (
                                
                              <span id="wallet" className="profile_wallet">{item.name}
                              {index !== userData.payment_method.length - 1 && ' , '}
                              </span>
                              
                              ))
                          }
                          </h4>
                          
                      </div>
        </div>
      </div>
    </div>
  </section>

     
  <section className='container no-top no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
              <div className="items_filter">
                <ul className="de_nav text-left">
                {/* <li id='Mainbtn' className=""><span>Digital Products</span></li>
                    <li id='Mainbtn1' className=""><span>Profile</span></li>
                    <li id='Mainbtn2' className=""><span>Services Packages</span></li> */}
                    <li id='Mainbtn' className="mt-3 "><span onClick={handleBtnClick}>Description</span></li>
                    
                    <li id='Mainbtn2' className="mt-3 active"><span onClick={handleBtnClick2}>Service packages</span></li>
                    <li id='Mainbtn1' className="mt-3 "><span onClick={handleBtnClick1}>Hourly Booking</span></li> 
                    <li id='Mainbtn3' className="mt-3 "><span onClick={handleBtnClick3}>Videos</span></li> 
                </ul>
            </div>
          </div>
        </div>
      {openMenu && author.id && (  
        <>
        <div id='zero1' className='onStep fadeIn'>
         {/* <ColumnNewRedux shuffle showLoadMore={false} authorId={author.id}/> */}
        </div>
        </>
      )}
        {openMenu1 && author.id && (  
        <>
        <div id='zero1' className='onStep fadeIn'>
         {/* <ColumnNewRedux shuffle showLoadMore={false} authorId={author.id}/> */}
        </div>
        </>
      )}
        {openMenu3 && author.id && (  
        <>
        <div id='zero1' className='onStep fadeIn'>
         {/* <ColumnNewRedux shuffle showLoadMore={false} authorId={author.id}/> */}
        </div>
        </>
      )}
  
      {openMenu2 && ( 
<Packages/>   
      )}
      </section>


      
      
              </div>
      </div>
      <div className="chat-fixed">
      <form className="chat-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
        <br/>
        <div>
        
        </div>
        
      </form>
      <p>
          Get More Information about  <a href="/blockchain"> Portdex.ai </a>
        </p>
        </div>
    </div>
    </div>

 
  
  

  


  {/* <Footer /> */}
</div>
</>
);
}
export default memo(Author2);