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

const Portdexdao= () => (
  <div>
  <GlobalStyles />
  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Portdex DAO</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
      <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Portdex DAO</h2>
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
                        Portdex Decentralised Autonomous Organization (DAO) will empower the freelancer’s community to decide on product and services marketplace features, development, and future roadmap.
<ul>
  <li>
  Decentralised governance, User empowerment, future direction
  </li>
<li>
Eliminating centralised third-party digital product and marketplace commissions. 
</li>
<li>
Direct multicurrency payment options  
</li>
<li>
Encrypted transaction processing
</li>
<li>
Blockchain network governed by the freelance community 
</li>
</ul>

<br/>
Instead of paying high commission third-party Centralised marketplaces, Freelancers will only pay a min transaction fee. Portdex will charge a 3% commission on successful transactions between freelancer and buyer. Portdex will distribute 30% of the profit back to the freelance community. Freelancers and Buyers will be able to interact directly through peer-to-peer communication platforms and will be able to transact directly.

</p>
                      </Reveal>
                    </div>
                    <i className="wm icon_wallet"></i>
                </div>
            </div>
          
        </div>
        </div>
      </section> 

      <section className='custom-accord bg-gray pb-5 pt-0'>
<div className='container bg-gray'>
      <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Country Level Governance Council
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              
              <ul>
                                <li>
                                Each country will have a country-specific governance council, which will be provided funds through DAO to add and build country-specific offerings. 
                                </li>
                                <li>
                                30% of the profit generated from the jurisdiction will be distributed back among the community.
                                </li>
                            </ul> </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Platform Governance
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body> Freelancers as ecosystem stakeholder to vote on platform features at the application, network, and infrastructure layer. Governance token holders can submit new proposals, vote on an existing one, or even decide on possible changes to the governance system. Proposals can determine specific system parameters, such as platform features, and important community goals and targets, and vote on code contributions and funds allocation. Governance tokens will be essential in the Portdex ecosystems for giving users a direct stake in managing the Platform.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Governance- Voting Model
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>  <p className="">
                        <ul>
                            <li>
                            Voting on the app features.
                            </li>
                            <li>
                            Voting on the rewards.
                            </li>
                            <li>
                            Voting on payment methods, platform features, and Future roadmap.
                            </li>
                        </ul>
                         Portdex Utility Tokens will be digital vouchers that can be redeemed against Portdex services. The utility token does not reflect a claim for money against the issuer. It will only serve as a voucher that can be redeemed for goods or services.</p></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
        </section>
  <section className=''>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='d-rtl'>
            <img src='/img/market/token.png'/>
            </div>
          </div>
          <div className='col-lg-6 p-4'>
            <h1>
             Portdex will empower Freelancers
            </h1>
            {/* <h6>
            Portdex will offer SMEs Super DApp and P2P marketplace
            </h6> */}
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
                Post-to-Earn  
                </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className=' token-boxes min-height-box'>
              <img src='/img/market/paymentmethod.png'/>
                <h2>
                Payment Method
                </h2>
                <p>
                De - Facto method for platform services 
                </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className=' token-boxes min-height-box'>
              <img src='/img/market/license.png'/>
                <h2>
                license
                </h2>
                <p>
                Will act as license key to access the eco-system and services execution  
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
              <h2 className="text-light">Freelancers All in One Dashboard </h2>
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
                        <h4 className="text-dark">Manage Product and Services</h4>
                      </Reveal>
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="text-dark"> Manage All transactions related to your digital product, services and clients.</p>
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
                      <h4 className="text-dark">Manage Multi-currency Transactions</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="text-dark">Manage All your currency transactions including tax records of digital currency.</p>
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
                      <h4 className="text-dark">Manage Nodes</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="text-dark">Act as a node to secure the network and manage it from dashboard and earn rewards.</p>
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
          ALL IN ONE FREELANCERS - SUPER DAPP
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
                Freelancers will be able to claim the rewards as part of the governing council of the platform.
 30% of the Platform profit will be shared with freelancers.
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

    <Footer />

  </div>
);
export default Portdexdao;
