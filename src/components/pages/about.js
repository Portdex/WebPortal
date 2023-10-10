import React from 'react';
import SliderMain from '../components/SliderMain';
import FeatureBox from '../components/FeatureBox';
import FeatureBox2 from '../components/FeatureBox2';
import AuthorListRedux from '../components/AuthorListRedux';
import Footer from '../components/footer';
import { keyframes } from "@emotion/react";
import Reveal from 'react-awesome-reveal';
import Blockchain from './Blockchain';
import Digitalproduct from './Digitalproduct';
import Taxtracking from './Taxtracking';
import Connectivity from './Connectivity';
import Sidebars from '../menu/sidebar';
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


const About= () => {
  
  return(
<>
<Sidebars/>
  <div className='margin-left-sidebar px-3'>
      <section className="jumbotron breadcumb no-bg h-vh" style={{backgroundImage: `url(${'./img/bg-shape-1.jpg'})`}}>
         <SliderMain/>
      </section>

      <section className='container no-top no-bottom'>
        <FeatureBox/>
      </section>

      <section className='container no-bottom padding-top-more'>
      <h4 className='text-center purple'>
        Portdex aim is to Eliminate Centralised third-party Platforms
       </h4>
       <h2 className='text-center purple mx-auto'>
        Decentralized Digital Products & Services-Users Governed Model
       </h2>
       <FeatureBox2/>
      </section>
      {/* Blockchain part */}
     <Blockchain/>
     {/* Digital ProductNFT */}
     <Digitalproduct/>
     {/* Connectiviity */}
     <Connectivity/>
     {/* Tax tracking */}
     <Taxtracking/>

      
    <Footer />

  </div>
  </>
);
  };
export default About;