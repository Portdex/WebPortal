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

const Marketplace= () => (
  <div>
  <GlobalStyles />
      <section className="jumbotron no-bg" style={{backgroundImage: `url(${'./img/background/2.jpg'})`}}>
       {/* <Particle/> */}
         <SliderMainParticle/>
      </section>

      {/* <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>DECENTRALIZED DIGITAL MARKETPLACE</h2>
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
                        <h4 className="">Decentralized Digital Store</h4>
                      </Reveal>
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="">Users will be able to own and govern digital product store</p>
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
                      <h4 className="">Blockchain & Smart Contracts</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Blockchain & Smart contracts based marketplace for freelancers and small service providers</p>
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
                      <h4 className="">Multicurrency Payments</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Integrated with multicurrency payments</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div>
        </div>
        </div>
      </section> */}
      <section className='pb-0'>
      <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Freelancers Governed – Web 3.0 Marketplace</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className='container'>
        <div className='row mt-5 d-flex align-items-center'>
        <div className='col-lg-6'>
          <img
                    src="/img/vector2.jpg"
                    className="mx-auto radius img-fluid d-block mb-3"
                    alt="#"
                  />
          </div>
        <div className='col-lg-6 p-5'>
        <p>
        Portdex is a web 3.0 freelancers decentralised digital products and services marketplace governed by the community. Sellers of digital products & service providers will connect directly with buyers without intermediaries like traditional marketplaces. Portdex uses blockchain technology, smart contracts, & AI to create a peer-to-peer network where transactions are verified and processed securely without a central authority/intermediary.
        <br/> <br/>
        Portdex will eliminate centralised third-party platforms facilitating digital product and service transactions between freelancers and buyers. The third-party platform act as a regulator and charge hefty subscription fees, transaction fees, sales commissions, and payment processing fees. 
        </p>
        </div>
        
        </div>
        <div className='row mt-5 d-flex align-items-center'>
        
        <div className='col-lg-6 p-5'>
        <p>
        Portdex decentralised marketplace will enable digital product sellers to sell digital products such as subscriptions, memberships, logos, themes, websites, plugins, code,  libraries, algorithms, and services packages directly to buyers integrated with real-time communication.   They can earn real-value rewards through tokens for their sales and contribution to the platform. Smart contracts will give sellers more control over their digital products, content, pricing, and terms.
        <br/> <br/>
        Portdex decentralised model will disrupt the centralised digital product and services market and provide new opportunities for digital product and services sellers and buyers to transact in a decentralized, transparent, and rewarding manner.
        </p>
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
            <div className='d-rtl'>
            <img src='/img/market/token.png' className='custom-height'/>
            </div>
          </div>
          <div className='col-lg-6 pt-5'>
            <p>
            Portdex will enable users to transact using various currencies, including digital money, cryptocurrencies, and stable currency. Overall, Portdex offers a more efficient, secure, and cost-effective way for service providers, freelancers, and digital product sellers to reach buyers directly and transact in a peer-to-peer fashion. 
<br/><br/>
Portdex, through blockchains, will transform the digital products industry by creating decentralized marketplaces that offer greater security, transparency, and control to buyers and sellers. Portdex Blockchain-based marketplaces will enable peer-to-peer transactions without intermediaries, reducing transaction costs and increasing sellers' profitability. Additionally, blockchain-based marketplaces will offer increased security for buyers and sellers by utilizing smart contracts and distributed ledger technology to facilitate transactions and record ownership of digital assets. Furthermore, blockchain-based marketplaces can provide greater transparency and accountability in the digital products industry. With the help of blockchain technology, buyers can verify the authenticity of digital products, while sellers can track the ownership and usage of their products.
<br/><br/>
Portdex decentralised digital product and services marketplaces will not be controlled by a single entity but instead operate on a peer-to-peer basis and be governed by the community. The marketplaces will provide opportunities for digital product owners and buyers to interact directly, without intermediaries, and allow for greater freedom of expression.

            </p>
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
            PEER-TO-PEER SERVICE MARKETPLACE
            </h1>
           
            <div className='row'>
              <div className='col-lg-12'>
                <div className=' token-boxes'>
              
                <h2>
                P2P Transactions ›
                </h2>
                <p>
                Portdex allows service providers, freelancers, and sellers of digital products to connect directly with buyers without intermediaries like traditional marketplaces.
                </p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className=' token-boxes'>
             
                <h2>
                Buyer & Seller Control ›
                </h2>
                <p>
                Portdex through blockchain, will transform the digital products industry by creating decentralized marketplaces that offer greater security, transparency, and control to both buyers and sellers.
                </p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className=' token-boxes'>
              
                <h2>
                Eliminating Third Party ›
                </h2>
                <p>
                Portdex's platform offers a P2P decentralised marketplace for small service providers to list their service as a digital package
                </p>
                </div>
              </div>
             
            </div>
          </div>

        </div>
      </section>
      {/* <section className='container-fluid' style={{backgroundImage: 'url("/img/market/background.png")', backgroundRepeat:'no-repeat'}}>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className="text-light">FREELANCERS ALL IN ONE - SUPER APP TO MANAGE PAYMENTS & TRANSACTIONS</h2>
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
                        <h4 className="text-dark">Manage Clients</h4>
                      </Reveal>
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="text-dark">Portdex will enable freelancers to manage all their clients from one place.</p>
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
                      <h4 className="text-dark">Manage Transactions</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="text-dark">Freelancers will be able to manage all transactions from one place.</p>
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
                      <h4 className="text-dark">Manage Payments</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="text-dark">Freelancers will be able to manage multicurrency payments through wallet.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div>
        </div>
        </div>
      </section> */}

      <section className='container image-center' style={{backgroundImage:" url('/img/product/comingsoon.jpg')"}}>
        <div className='row opacity'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Browse by category</h2>
              <div className="small-border"></div>
            </div>
          </div>
        
        
        <Catgor/>
        </div>
      </section>

     

    
    <Footer />

  </div>
);
export default Marketplace;