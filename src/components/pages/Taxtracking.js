import React, {useEffect} from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";


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

const Taxtracking= () => {
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
            <h1 className='text-center'>Transaction Level Tax Tracking </h1>
          </div>
        </div>
      </div>
    </div>
  </section> */}
      <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Transaction Level Tax Tracking </h2>
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
<ul>
  <li>
  Portdex will enable Digital product owners and freelance service providers to have transaction level tax record of digital product, NFT processed and multicurrency transaction processed. 
  </li>
<li>
It will enable them to have a complete record of cryptocurrency, stable currency payments. 
</li>
<li>
The transaction tax record will be based on jurisdiction level requirements. 
</li>
<li>
Conversion Transaction Record: Interoperability between legacy system & different Blockchain networks, conversion of cross-chain assets, and transaction payment will be recorded for compliance.
</li>

</ul>

</p>
                      </Reveal>
                    </div>
                    <i className="wm icon_wallet"></i>
                </div>
            </div>
          
        </div>
        </div>
      </section> 
   

    {/* <Footer /> */}

  </div>
);
  };
export default Taxtracking;