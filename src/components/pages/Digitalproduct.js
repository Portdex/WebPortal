import React , {useEffect} from 'react';
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

const Digitalproduct= () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
  <div>
  <GlobalStyles />
  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Digital Products NFTs</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
      <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2></h2>
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
  Freelance digital product owners will be able to control their digital product through traceable NFT and ownership transferred to the third party. Blockchain will enable usage control system to enforce usage rights through smart contracts. Centralised platform does not guarantee freelancers control over digital product and over further processing and re-use of digital product owned by them. 

  </li>
<li>
In Portdex ecosystem, Non- Fungible tokens (NFT) will represent ownership of a wide variety of real-world items such as product serial numbers, Invoices, logos, Themes, and designs. 
</li>
<li>
Digitized product will be linked with NFT. The current centralised applications that facilitate identification, barcode scanning, and mobile fail to tackle the end-to-end traceability of products and assets. 
</li>
<li>
Non-fungible tokens will alter the way people capitalize off their intellectual contents.
</li>
<li>
Gig economy workers who use third-party platforms for creating assets such as designs, logos, and themes will be able to trace their assets beyond one of transaction.
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
    

    <Footer />

  </div>
);
  };
export default Digitalproduct;