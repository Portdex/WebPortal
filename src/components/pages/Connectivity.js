import React from 'react';
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
import Catgor from '../components/Catgor';

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

const Connectivity= () => (
  <div>
  <GlobalStyles />
  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Real Time Connectivity</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
      <section className='container pb-0'>
        <div className='row'>
            <h2 className='text-center'>
                Real Time Connectivity
            </h2>
            <p className='text-center'>
            Portdex will empower Freelance service providers to directly transact with buyer without the need of middleman. 
            <br/> It also allows freelancers to sell digital products, services directly to buyers.
            </p>
        </div>
      </section>
      <section className='pb-3 pt-5'>
      
        <div className='container'>
        <div className='row mt-3 d-flex align-items-center'>
        <div className='col-lg-6'>
          <img
                    src="/img/vector2.jpg"
                    className="mx-auto radius img-fluid d-block mb-3"
                    alt="#"
                  />
          </div>
        <div className='col-lg-6 p-5'>
        <p>
      <strong> 87% of the smartphone population worldwide is on messenger; 45% of shopper’s message businesses to get specific information. In December 2020, Whatsapp announced Carts, a native shopping cart for merchant profiles; TikTok has begun working with merchants in markets to sell products directly to millions of users within the app.
      </strong> 
       <ul>
        <li>
        Portdex P2P model will enable real-time connectivity between seller and buyers.
        </li>
        <li>
        The application will enable real-time messaging based native e-commerce. 
        </li>
        <li>
        Portdex will also facilitate conversion through interoperable SDK in real time between different blockchains network.
        </li>
       
       </ul>
        </p>
        </div>
        
        </div>
        <div className='row mt-5 d-flex align-items-center'>
        
        <div className='col-lg-6 p-5'>
            <h4>
            Currency Connectivity - Multi-Currency Connectivity/Links
            </h4>
       <ul>
        <li>
Portdex will enable businesses & Freelancers to transact in real-time by integrating stable-currency/cryptocurrency features natively payment link option. 
        </li>
        <li>
        User will have same seamless payment experience as traditional apps. The user will add the bank account, and payment in the background will be processed through stable currency providers. 
        </li>
        <li>
       <strong> 75% of SME’s plan to accept cryptocurrency payments </strong> within the next two years; over 50% plan to have third-party payment processors to convert digital currency into fiat (Deloitte, 2022). 
        </li>
       </ul>
        </div>
        <div className='col-lg-6'>
          <img
                    src="/img/vector1.jpg"
                    className="mx-auto radius img-fluid d-block mb-3"
                    alt="#"
                  />
          </div>
        </div>
        <div className='row d-flex align-items-center'>
        <div className='col-lg-6'>
          <img
                    src="/img/vector3.jpg"
                    className="mx-auto radius img-fluid d-block mb-3 px-3"
                    alt="#"
                  />
          </div>
          <div className='col-lg-6 pt-5'>
            <h4>
            DeFi Connectivity 
            </h4>
            <p>
           <i> Nearly Half of Gig Economy Freelance and Contract Workers are denied Access to Financial Services (Yahoo Finance 2022). 28% of self-employed workers in the UK struggle to access financial services.
           </i>
<br/><br/>
Portdex will connect freelancers to peer to peer financial system that leverage blockchain and smart contracts to enable micro, small businesses, and the freelance community to access decentralised finance. Freelance community without intermediary will have access to decentralised finance based on blockchain & smart contracts. Portdex will make the process easier for freelancers and transform how freelancers access and use financial services through stable currency.

            </p>
          </div>
          

        </div>
        </div>
      </section>
    <Footer />

  </div>
);
export default Connectivity;