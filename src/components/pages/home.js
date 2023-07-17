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
import WebSidebar from '../menu/webSidebar';

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



const Home= () => {
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
<Sidebars/>
<div className="containerchat">
        <GlobalStyles/>
        
        <div className="row">

       <WebSidebar/>
    <div className="col-lg-9 col-9 p-0 responsive-flex">
    
      <div className="chat">
        <div className="height-contain">
          <BlinkingText/>
      <h3 className='text-center mt-5 pt-5 pb-3 color-purple'>
      Portdex.ai will Port & connect you for free. 
      <br/>
      Search & Connect in real Time. 
        </h3>
        <div className="chat-messages d-flex justify-content-center">
          <div className="row w-75">
           
            <div className="col-lg-4 col-md-4 col-12 text-center">
              <h6>
             Service  provider
              </h6>
              
<div className="gray-boxes mt-3" onClick={handleFreelancers}>
  <p>
   Freelancers
  </p>
</div>
<div className="gray-boxes" onClick={handleAccountant}>
  <p>
    Accountant
  </p>
</div>
<div className="gray-boxes" onClick={handleLawyer}>
  <p>
    Lawyers
  </p>
</div>

            </div>
            <div className="col-lg-4 col-md-4 col-12 text-center">
<h6>
Product Seller
</h6>

<div className="gray-boxes mt-3"  onClick={handleDigitalProduct}>
  <p>
    Digital Product Seller
  </p>
</div>
<div className="gray-boxes" onClick={handlePhysicalProduct}>
  <p >
    Physical Product Seller
  </p>
</div>
<div className="gray-boxes" onClick={handleMarketplace}>
  <p>
    Digital Product Marketplace
  </p>
</div>


            </div>
            <div className="col-lg-4 col-md-4 col-12 text-center">
              <h6>
              Compare Local 
              </h6>
              
<div className="gray-boxes mt-3">
  <p>
    Local Products
  </p>
</div>
<div className="gray-boxes">
  <p>
    Local Prices
  </p>
</div>
<div className="gray-boxes">
  <p>
    Local Services
  </p>
</div>

            </div>
          </div>
            
            
         
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
            Get More Information about  <a href="/about"> Portdex.ai </a>
          </p>
          </div>
      </div>
      </div>

      </div>
         
    </div>
    </>
);
  };
export default Home;