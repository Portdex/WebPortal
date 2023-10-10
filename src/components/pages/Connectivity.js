import React, {useEffect} from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
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

const Connectivity= () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
  <div>
  {/* <GlobalStyles /> */}
  {/* <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Real Time Connectivity</h1>
          </div>
        </div>
      </div>
    </div>
  </section> */}
      <section className='container pb-0 padding-top-more'>
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
       
       
        </div>
      </section>
    {/* <Footer /> */}

  </div>
);
};
export default Connectivity;