import React , {useState} from 'react';
import { keyframes } from "@emotion/react";
import '../../assets/chat.css'


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




const WebSidebar= () => {
  return(
    <>


        <div className="col-lg-3 col-3 p-4 background-container chat-sidebar pt-0">
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
            {/* <li>
              <a href="/wallet">
              Connect Wallet
              </a>
            </li> */}
            <li>
              <a href="/blockchain">
              About
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