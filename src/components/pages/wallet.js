import React, { useState } from 'react';
 import WalletData from '../components/wallet';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

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
  color: rgba(255, 255, 255, .5);
}
header#myHeader .logo .d-block{
  display: none !important;
}
header#myHeader .logo .d-none{
  display: block !important;
}
.mainside{
  .connect-wal{
    display: none;
  }
  .logout{
    display: flex;
    align-items: center;
  }
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

const Wallet = () => {
  const [modal, setModal] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  // const handleModalOpen = () => {
  //   setModalOpen(false);
  // };

  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };

  return (
    <div>
      <GlobalStyles/>

      <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12'>
                <h1 className='text-center'>Wallet</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='container'>
        <h2 className='text-center'>
          Coming Soon
        </h2>
        <button onClick={toggleModal}>Open Modal</button>
      </section> */}

      <section className='container'>
        <WalletData/>
      </section>

{modal ? 
        <div className={`modal ${modal ? 'display-block' : 'display-none'}`}>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1 className='text-center'>Coming Soon</h1>
            
            {/* <p class="text-center pt-5 pb-5">
              Coming Soon
            </p> */}
           
            
          </div>
        </div>
    :
    <></>  
    }
      <Footer />
    </div>
  );
};

export default Wallet;