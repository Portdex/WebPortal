import React from 'react';
import SliderMain from '../components/SliderMain';
import FeatureBox from '../components/FeatureBox';
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

     

      <section className='container no-bottom image-center' style={{backgroundImage:" url('/img/product/comingsoon.jpg')"}}>
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
      </section>
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

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Community</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            {/* <AuthorListRedux/> */}
            <CarouselNewCommunity/>
          </div>
        </div>
      </section>

      
    <Footer />

  </div>
);
  };
export default Home;