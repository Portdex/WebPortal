import React from 'react';
import SliderMain from '../components/SliderMain';
import FeatureBox from '../components/FeatureBox';
import FeatureBox2 from '../components/FeatureBox2';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import CarouselNewRedux from '../components/CarouselNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import Catgor from '../components/Catgor';
import Footer from '../components/footer';
import CarouselNewCommunity from '../components/CarouselNewCommunity';


const Home= () => {
  
  return(

  <div>
      <section className="jumbotron breadcumb no-bg h-vh" style={{backgroundImage: `url(${'./img/bg-shape-1.jpg'})`}}>
         <SliderMain/>
      </section>

      <section className='container no-top no-bottom'>
        <FeatureBox/>
      </section>

      <section className='container no-bottom'>
      <h4 className='text-center purple'>
        Portdex aim is to Eliminate Centralised third-party Platforms
       </h4>
       <h2 className='text-center purple mx-auto'>
        Decentralized Digital Products & Services-Users Governed Model
       </h2>
       <FeatureBox2/>
      </section>

      {/* <section className='container no-bottom image-center' style={{backgroundImage:" url('/img/product/comingsoon.jpg')"}}>
        <div className='row opacity'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Marketplace</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselNewRedux/>
          </div>
        </div>
      </section> */}
      {/* <section className='container image-center' style={{backgroundImage:" url('/img/product/comingsoon.jpg')"}}>
        <div className='row opacity'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Browse by category</h2>
              <div className="small-border"></div>
            </div>
          </div>
        
        
        <Catgor/>
        </div>
      </section> */}
       <section className='pb-0'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='d-rtl p-5'>
            <img src='/img/market/dapp.png'/>
            </div>
          </div>
          <div className='col-lg-6 p-4'>
            <h1>
            PEER-TO-PEER
            </h1>
           
            <div className='row'>
              <div className='col-lg-12'>
                <div className=' token-boxes'>
              
                <h2>
                P2P Transactions ›
                </h2>
                <p>
                Freelancers, and sellers of digital products will be able to connect directly with buyers without intermediaries like traditional marketplaces.
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
               Portdex's platform will eliminate third party marketplaces commission and transaction fee.  
                </p>
                </div>
              </div>
             
            </div>
          </div>

        </div>
      </section>

      <section className='container no-bottom pt-2'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Community</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
            {/* <CarouselNewCommunity/> */}
          </div>
        </div>
      </section>

      
    <Footer />

  </div>
);
  };
export default Home;