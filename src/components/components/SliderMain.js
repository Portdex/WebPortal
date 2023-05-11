import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { useNavigate } from 'react-router-dom';

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
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Slidermain= () => {
 const navigate=useNavigate();
  return(
 <div className="container">
    <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-single"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <h3 className="mb-2"><span className="text-uppercase color">Decentralised Freelancers Digital product and services Marketplace </span></h3>
              </Reveal>
              <div className="spacer-10"></div>
              {/* <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
              <h1 className="">Sell Digital Product & Services Directly to Buyers.</h1>
              </Reveal> */}
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
              <p className=" lead">
              Portdex is a web 3.0 decentralised community governed peer-to-peer digital products and services marketplace. Digital product owners,  & freelance service providers can digitize their offering, and can connect directly with buyers without intermediaries
               </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
              <a href='https://business.portdex.ai/web/company_signup' className="btn-main lead" target="_blank">Join our freelance community</a>
              <div className="mb-sm-30"></div>
              </Reveal>
          </div>
          <div className="col-md-6 xs-hide">
            <Reveal className='onStep' keyframes={fadeIn} delay={900} duration={1500} triggerOnce>
              <img src="./img/banner.png" className="lazy img-fluid" alt=""/>
              <h3 className="text-end color pt-3 animated-heading ">Sell Digital Product & Services Directly to Buyers.</h3>
            </Reveal>
          </div>
      </div>
    </div>
);
  };
export default Slidermain;