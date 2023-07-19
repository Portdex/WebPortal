import React, {useEffect} from 'react';
import Particle from '../components/Particle';
import SliderMainParticle from '../components/SliderMainParticle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import ColumnNewRedux from '../components/ColumnNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
    color: #fff;
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
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;
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

const Blockchain= () =>{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
  <div>
  {/* <GlobalStyles />
  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Blockchain Technology & Smart contracts </h1>
          </div>
        </div>
      </div>
    </div>
  </section> */}
      <section className='container-fluid bg-gray padding-top-more'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Blockchain Technology & Smart contracts </h2>
              <div className="small-border"></div>
              <p className='text-center'>
              </p>

            </div>
          </div>
        </div>
        <div className='container'>
        <div className='row'>
        <div className="col-lg-12 col-md-12 mb-3">
                <div className="feature-box f-boxed style-3">
                 
                    <div className="text">
                     
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="">
                        Centralised models based on traditional databases are organization-centric, asymmetric and promote the interest of the organisations. Portdex Decentralised model based on blockchain technology and smart contracts will enable distributed trust and Governance. It will offer decentralised Digital product Marketplace based on Blockchain & smart contracts. 
                        <br/>
Through Blockchain Portdex will enable the users to govern the Platform.  
<br/>
Through Blockchain, AI, and Smart contracts, Portdex will enable; 

<ul>
  <li>
  Transparency between the individual and services involved in the transaction.
  </li>
<li>
Consensus about the content and conduct of the transaction.  
</li>
<li>
Digital identities and logs of transactions for compliance purposes.  
</li>
<li>
Enforcing transactions usage rights.
</li>
<li>
Providing consistency between the usage rights granted in a transaction and the real usage ensuring long term transparency. 
</li>
<li>
Low fee multicurrency transaction for digital product and services 
</li>
<li>
Stable Currency transaction acceptance for online payments.
</li>
<li>
Freelancer Decentralised Autonomous Organisation (DAO) for Platform Governance 
</li>
<li>
Digital Products NFTs 
</li>
<li>
Jurisdiction & Global Nodes for Local & Global level Governance and encrypted transaction processing.
</li>
<li>
Security: Transactional level security using zero-knowledge proof to preserve financial transaction confidentiality.
</li>
</ul>

<br/>


</p>
                      </Reveal>
                    </div>
                    <i className="wm fa fa-chain"></i>
                </div>
            </div>
          
        </div>
        </div>
      </section> 
    {/* <Footer /> */}

  </div>
);
 };
export default Blockchain;