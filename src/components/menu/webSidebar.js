import React , {useState} from 'react';
import { keyframes } from "@emotion/react";
import '../../assets/chat.css'
import { 
  Link, 
  useNavigate, 
  useMatch,
  useResolvedPath
} from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';


import Sidebars from '../menu/sidebar';
import BlinkingText from '../components/Blinking';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const GlobalStyles = createGlobalStyle`
.navbar {
  display: none;
}
header
{
  display:none;
}
.navbarHome
{
  display:none;
}

@media (max-width: 895px) {
  .chat-sidebar {
    display: none;
  }
  .navbarHome {
    display: block;
  }
  .responsive-flex
  {
    width:100%;
  }
}
`;

const Container = styled.div`
display: flex;
`;

const Sidebar = styled.div`
background-color: #f2f2f2;
width: 250px;
height: 100vh;
position: fixed;
top: 0;
left: 0;
animation: ${fadeInUp} 0.3s ease;

@media (max-width: 776px) {
  display: none;
}
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

  

const NavLink = (props) => {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      {...props}
      className={ match ? 'active' : 'non-active'}
    />
  )
};



const WebSidebar= () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [showmenu, btn_icon] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDigitalProduct =() =>{
localStorage.setItem("value" , "digital")
navigate('/category')
  }
  const handlePhysicalProduct =() =>{
    localStorage.setItem("value" , "physical")
    navigate('/category')
      }
  const handleMarketplace =() =>{
    localStorage.setItem("value" , "marketplace")
    navigate('/category')
          }
  const handleFreelancers =() =>{
    localStorage.setItem("value" , "freelancer")
    navigate('/category')
              }
  const handleAccountant =() =>{
    localStorage.setItem("value" , "accountant")
    navigate('/category')
                  }
 const handleLawyer =() =>{
    localStorage.setItem("value" , "lawyer")
    navigate('/category') 
                      }
  return(
    <>


        <div className="col-lg-3 col-3 p-4 chat-sidebar pt-0">
        <div className='p-2 newchat'>
          <img src="./img/portdex-logo_1.png" alt="" />
        </div>

        <div className="bottom-tabs">
          <ul>
            <li className='color-gold'>
              <a href='https://business.portdex.ai/web/user_signup'>
                Service Seller 
                <br/>
              Join Our Beta Community
              </a>
            </li>
            <li>
              <a href="/wallet">
              Connect Wallet
              </a>
            </li>
            <li>
              <a href="/about">
              About
              </a>
            </li>
            <li>
              <a href="/wallet">
              Business Videos
              </a>
            </li>
<li>
              <a href="/our-team">
              Our Team
              </a>
            </li>
<li>
              <a href="/community">
              Community
              </a>
            </li>
          </ul>
        </div>
        </div>
   
    </>
);
  };
export default WebSidebar;