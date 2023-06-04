import React, { memo, useEffect , useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";
import fetch from "./fetch";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
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
      const teamMembers = [
        { id: 1, name: 'Muhammad Rehman Tanoli ' , title: 'CEO|Founder' , img:'/img/frame-1.png' ,linkedIn: 'https://www.linkedin.com/in/mohtanoli/' },
        { id: 2, name: 'Andrew Henderson' , title: 'Commercial|Board Member' , img:'/img/frame-2.png' ,linkedIn: 'https://www.linkedin.com/in/adhenderson/' },
        { id: 3, name: 'Dr. Jonathan Blackledge' , title: 'Director Cyber Security' , img:'/img/frame-3.jpg' ,linkedIn: 'https://www.linkedin.com/in/jonathan-blackledge-7643a5150/' },
        { id: 4, name: 'Dr. Hermann Sterzinger' , title: 'Board Member' , img:'/img/frame-4.png' ,linkedIn: 'https://www.linkedin.com/in/hermann-sterzinger-7989b72/' },
        { id: 5, name: 'Martyn Walker ' , title: 'Blockchain Technologist' , img:'/img/favicon.ico' ,linkedIn: 'https://www.linkedin.com/in/martynwalker/' },
        { id: 6, name: 'Faheem Ziker' , title: 'Web/API Developer' , img:'/img/favicon.ico' ,linkedIn: 'https://www.linkedin.com/in/faheem-mohammad-ziker-7bb0a415/' },
        { id: 7, name: 'Faisal Ahmed' , title: 'Freelance Developer Engagement Australia' , img:'/img/frame-7.png' ,linkedIn: 'https://www.linkedin.com/in/faisal-ahmed-8a986246/' },
        { id: 8, name: 'Tahreem Farooq' , title: 'Software Developer' , img:'/img/favicon.ico' ,linkedIn: 'https://www.linkedin.com/in/tehreemfarooq12/' },
        { id: 9, name: 'Mubashir hassan' , title: 'Software Developer' , img:'/img/favicon.ico' ,linkedIn: 'https://www.linkedin.com/in/mubashir-hassan/' },
        { id: 10, name: 'Mubashira Iqbal' , title: 'Software Engineer' , img:'/img/favicon.ico' ,linkedIn: 'https://www.linkedin.com/in/mubashira-iqbal-36aa7b201/' },
        { id: 11, name: 'tehmina safdar' , title: 'Business Development Manager' , img:'/img/favicon.ico' ,linkedIn: 'https://www.linkedin.com/in/tehmina-safdar-b8126318b/' },
        { id: 12, name: 'Richard Poynder' , title: 'Freelancer Events Engagement' , img:'/img/frame-5.png' ,linkedIn: 'https://www.linkedin.com/in/richard-poynder-1835422/' },
        { id: 13, name: 'Annabel Cartwright' , title: 'Event Strategist' , img:'/img/frame-6.png' ,linkedIn: 'https://www.linkedin.com/in/annabel-cartwright-a2517bb/' },
      ];
      useEffect(() => {
          fetch()
          .then(data => {
            data=data.data.results.users;
            setUserData(data)

          })
          window.scrollTo(0, 0);
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
      <section className="p-3 pt-4">
        <div className="row">
          <h2 className="text-center">
          Our Executive Team 
          </h2>
        </div>
      </section>
       
   <div class="row m-4">
     {teamMembers.map((item)=>(
 <div  class="col-lg-3">
 <div className='community-column text-center'>
 <div class="community-card min-community-card p-3">
   <div class="img-container">
     <img src={item.img} />
   </div>
   <h4 className="community-h3 mb-2">{item.name}</h4>
   <p className="m-0 mb-2"> {item.title} </p>
   <div class="community-icons">
    <a className="mx-auto" href={item.linkedIn} target="_blank">
   <i className="f-size fa fa-fw mx-auto" aria-hidden="true" title="Copy to use linkedin-square"></i>
   </a>
   </div>
 </div>
 </div>
</div>
     ))}
     {/* <!-- Column 2--> */}
   </div>
   <Footer/>
     </div>

    )
}
export default Ourteam