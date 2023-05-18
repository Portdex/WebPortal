import React, { memo,useState,  useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ColumnNewRedux from '../components/ColumnNewRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";
import api from "../../core/api";
import { Spinner } from "react-bootstrap";
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import auth , { authorUrl }from "../../core/auth";
import request from '../../core/auth/request';
import { useNavigate, useParams } from 'react-router-dom';
import fetch from "./fetch";
import { Link } from "react-router-dom";
import axios from "axios";
import fetchServices from "./fetchServices";
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

const Colection = ({ authorId }) => {
  const { username } = useParams();
  
  const [userData, setUserData] = useState([])
  const [serviceData, setServiceData] = useState([])
  console.log(serviceData)
  console.log(userData)
  const [loading , setLoading]= useState(false)
const [openMenu, setOpenMenu] = React.useState(true);
const [openMenu1, setOpenMenu1] = React.useState(false);
const [openMenu2, setOpenMenu2] = React.useState(false);
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
    }, []);
  //   useEffect(() => {
  //     dispatch(fetchAuthorList(authorId));
  // }, [dispatch, authorId]);
    
const handleBtnClick = () => {
  setOpenMenu(!openMenu);
  setOpenMenu1(false);
  setOpenMenu2(false);
  document.getElementById("Mainbtn").classList.add("active");
  document.getElementById("Mainbtn1").classList.remove("active");
  document.getElementById("Mainbtn2").classList.remove("active");
};
const handleBtnClick1 = () => {
  setOpenMenu1(!openMenu1);
  setOpenMenu2(false);
  setOpenMenu(false);
  document.getElementById("Mainbtn1").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
  document.getElementById("Mainbtn2").classList.remove("active");
};
const handleBtnClick2 = () => {
  setOpenMenu2(!openMenu2);
  setOpenMenu(false);
  setOpenMenu1(false);
  document.getElementById("Mainbtn2").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
  document.getElementById("Mainbtn1").classList.remove("active");
};





return (
 
<div>
<GlobalStyles/>
<section>
  <div className="mt-5">
    <div className="row ">
      <div className="col-lg-4 mx-auto px-5 mt-3 ">
        <div className="profile-section p-3">
      <div className="profile_avatar d-flex justify-content-center">
      <img src='/img/favicon.ico' alt=""/>
      <i className="d-flex fa fa-check"></i>
      </div>
      <div className="profile_name justify-content-center text-center mt-3">
                          <h4>
                            {userData.username}      
                                                          
                              <span className="profile_username">{userData.mail}</span>
                              <span className="profile_username text-muted">{userData.services}</span>
                              <div className="justify-content-center">
                              {
                              userData.payment_method && userData.payment_method.map((item, index) => (
                                
                              <span id="wallet" className="profile_wallet">{item.name}
                              {index !== userData.payment_method.length - 1 && ' , '}
                              </span>
                              
                              ))
                          }
                          </div>
                          </h4>
                          
                      </div>
                      {/* <div className="row d-flex justify-content-center">
              <button className="package-button"> Chat - Order Now </button>
            </div> */}
      </div>
      </div>
      <div className="col-lg-8 gig-section p-4 pt-0 mt-3">
        <h4>{userData.username}'s Service Packages</h4>
      {serviceData !=null ? 
         <div className='row'>
      
           
             {serviceData.services && serviceData.services.map((service, serviceIndex) => (
                <>
                { service.name ?
                  
            <div className=' col-lg-4 col-sm-6 col-md-6 p-0'>
                <Link
                  key={service.id}
                  to={`/servicedetail/${serviceData.username}/${service.id}`}
                  style={{ textDecoration: 'none' }}
                >
            <div className='single-card m-2'>
            <div className='col-lg-12'>
                <img src='/img/code_logo.png' alt='' className='img-fit-none'/>
                <h6 className='m-3'>{serviceData.username}</h6>
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
            
            </div>
            :
          <div className="row">
            <h3>
              No Packages Available
            </h3>
          </div>
}
      </div>
      </div>
    </div>
 
</section>

  


  <Footer />
</div>

);
}
export default memo(Colection);