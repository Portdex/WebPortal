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

const TokenEconomy= () => (
  <div>
  <GlobalStyles />
      <section className="jumbotron no-bg" style={{backgroundImage: `url(${'./img/background/2.jpg'})`}}>
      <div className="container">
    <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-single"></div>
              <div className="spacer-double"></div>
               <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <h6 className=""><span className="text-uppercase color">Portdex will launch a utility token</span></h6>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="col-white">DE - FACTO PAYMENT METHOD FOR PLATFORM SERVICES</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="lead col-white">
              Portdex will allocate 40% of the token to the community.
              </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
              <a href='https://business.portdex.ai/web/company_signup' className="btn-main lead" target="_blank"> 
              Portdex token will be launched under foundation structure
              </a>
              <div className="mb-sm-30"></div>
              </Reveal>
          </div>
      </div>
    </div>
      </section>

      <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>FREELANCERS - SUPER DAPP WILL BE POWERED BY PORTDEX TOKEN</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className='container'>
        <div className='row'>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="feature-box max-height f-boxed style-3">
                  <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                  <img
                    src="/img/market/store.png"
                    className="mx-auto img-fluid d-block mb-3"
                    alt="#"
                  />
                  </Reveal>
                    <div className="text">
                      <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                        <h4 className="">Shop-to-Earn / Post-to-Earn</h4>
                      </Reveal>
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="">Consumers can earn tokens as rewards from shopping through a P2P app and posting content for local businesses.</p>
                      </Reveal>
                    </div>
                    <i className="wm icon_wallet"></i>
                </div>
            </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box max-height f-boxed style-3">
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <img
                    src="/img/market/blockchain.png"
                    className="mx-auto img-fluid d-block mb-3"
                    alt="#"
                  />
                </Reveal>
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">Token Reward</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Portdex will help create a digital high street experience. It will distribute 30% of the commission as a reward in tokens.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_cloud-upload_alt"></i>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box max-height f-boxed style-3">
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <img
                    src="/img/market/payment.png"
                    className="mx-auto img-fluid d-block mb-3"
                    alt="#"
                  />
                </Reveal>
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">All in One</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Shopping through card payments and creating content for local retailers will enable consumers to earn tokens as rewards.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div>
        </div>
        </div>
      </section>
      <section className=''>
        <div className='row'>
          <div className='col-lg-6'>
            <img src='/img/market/token.png'/>
          </div>
          <div className='col-lg-6 p-4'>
            <h1>
            A TOKEN FOR BUSINESSES, FREELANCERS, AND CONSUMERS
            </h1>
            <h6>
            A token that will offer SMEs Super DApp and P2P marketplace
            </h6>
            <div className='row'>
              <div className='col-lg-6'>
                <div className=' token-boxes'>
              <img src='/img/market/govern.png'/>
                <h2>
                  Governance
                </h2>
                <p>
                Enable users to govern the platform
                </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className=' token-boxes'>
              <img src='/img/market/reward.png'/>
                <h2>
                Rewards
                </h2>
                <p>
                Shop-to-Earn AND Post-to-Earn  
                </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className=' token-boxes'>
              <img src='/img/market/paymentmethod.png'/>
                <h2>
                Payment Method
                </h2>
                <p>
                De - Facto payment method for platform services 
                </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className=' token-boxes'>
              <img src='/img/market/license.png'/>
                <h2>
                license
                </h2>
                <p>
                P Tokens will be a license key to access the eco-system and services execution  
                </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='container-fluid' style={{backgroundImage: 'url("/img/market/background.png")', backgroundRepeat:'no-repeat'}}>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className="text-light">TOKEN FOR ALL IN ONE FREELANCERS - SUPER DAPP</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className='container'>
        <div className='row'>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="feature-box max-height f-boxed style-3 bg-light">
                  <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                  <img
                    src="/img/market/clients.png"
                    className="mx-auto img-fluid d-block mb-3"
                    alt="#"
                  />
                  </Reveal>
                    <div className="text">
                      <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                        <h4 className="text-dark">ALL IN ONE</h4>
                      </Reveal>
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="text-dark">SMEs' sales, customer support, invoice, payment process automation, and instant account settlement.</p>
                      </Reveal>
                    </div>
                    <i className="wm icon_wallet"></i>
                </div>
            </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box max-height f-boxed style-3 bg-light">
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <img
                    src="/img/market/transaction.png"
                    className="mx-auto img-fluid d-block mb-3"
                    alt="#"
                  />
                </Reveal>
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="text-dark">SUBSCRIPTION</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="text-dark">SMEs subscription management is based on Blockchain</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_cloud-upload_alt"></i>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box max-height f-boxed style-3 bg-light">
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <img
                    src="/img/market/managepayment.png"
                    className="mx-auto img-fluid d-block mb-3"
                    alt="#"
                  />
                </Reveal>
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="text-dark">TOKENS</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="text-dark">Portdex utility tokens enable businesses to be part of governance at the application, network, and infrastructure layers.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div>
        </div>
        </div>
      </section>
      <section className=''>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='d-rtl p-5'>
            <img src='/img/market/dapp.png'/>
            </div>
          </div>
          <div className='col-lg-6 p-4'>
            <h1>
            TOKEN FOR ALL IN ONE FREELANCERS - SUPER DAPP
            </h1>
           
            <div className='row'>
              <div className='col-lg-12'>
                <div className=' token-boxes'>
              
                <h2>
                Digital Marketplace
                </h2>
                <p>
                Blockchain based marketplace, digital product listing, sale, management, and payment processing.
                </p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className=' token-boxes'>
             
                <h2>
                In-person Payments
                </h2>
                <p>
                Freelancers will be able to claim the token as part of the governing council of the platform.
10% of the token and 30% of the commission paid by the retailers will be shared with freelancers.
                </p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className=' token-boxes'>
              
                <h2>
                Instant Account settlement
                </h2>
                <p>
                Freelancers will have instant account settlement with minimum transaction costs.
                </p>
                </div>
              </div>
             
            </div>
          </div>

        </div>
      </section>

      

     

      {/* <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Community</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
          </div>
        </div>
      </section> */}

      {/* <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Create and sell your NFTs</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className='container'>
          <FeatureBox/>
        </div>
      </section> */}

    <Footer />

  </div>
);
export default TokenEconomy;