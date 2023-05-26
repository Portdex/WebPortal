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
                        Portdex Decentralised Autonomous Organization (DAO) will empower the freelancer’s community to decide on product and services marketplace features, development, and future roadmap. Portdex aims to distribute 40% of the token to the freelance community over four years. Any freelancer holding the Portdex token will be a member of the community. 
Benefits of the community-driven model: 
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
Instead of paying high commission third-party Centralised marketplaces, Portdex token holders will only pay a min transaction fee. Portdex will charge a 3% commission on successful transactions between freelancer and buyer. Portdex will distribute 30% of the profit back to the freelance community. Freelancers and Buyers will be able to interact directly through peer-to-peer communication platforms and will be able to transact directly.

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
              Governance & Utility Token
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body> Governance token will allow the ecosystem stakeholder to vote on platform features at the application, network, and infrastructure layer. Governance token holders can submit new proposals, vote on an existing one, or even decide on possible changes to the governance system. Proposals can determine specific system parameters, such as platform features, and important community goals and targets, and vote on code contributions and funds allocation. Governance tokens will be essential in the Portdex ecosystems for giving users a direct stake in managing the Platform.</Card.Body>
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
                            Voting on cryptocurrency addition by platform users & token distribution.
                            </li>
                        </ul>
                        Portdex token will be the driving force behind the platform. Token holder buyers will get a discount when paying in the Portdex token. Portdex token is neither a security nor a capital investment and hence not subject to a capital market regulation. Portdex Utility Tokens will be digital vouchers that can be redeemed against Portdex services. The utility token does not reflect a claim for money against the issuer. It will only serve as a voucher that can be redeemed for goods or services.</p></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
        </section>

      

    <Footer />

  </div>
);
export default Portdexdao;