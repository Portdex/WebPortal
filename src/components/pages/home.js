import React , {useState, useEffect} from 'react';
import { keyframes } from "@emotion/react";
import '../../assets/chat.css'
import { useNavigate, } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import Sidebars from '../menu/sidebar';
import BlinkingText from '../components/Blinking';
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
const GlobalStyles = createGlobalStyle`
.navbar {
  display: none;
}
header
{
  display:none;
}
.navbarHome
{
  display:none;
}

@media (max-width: 895px) {
  .chat-sidebar {
    display: none;
  }
  .navbarHome {
    display: block;
  }
  .responsive-flex
  {
    width:100%;
  }
}
`;


const Home= () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('Product Seller');
const [showAll, setShowAll] = useState(false);
const [showAllProduct, setShowAllProduct] = useState(false);
  const [visibleItems, setVisibleItems] = useState(5);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Set a timer to hide the notification after 50-60 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, 50000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(notificationTimer);
  }, []);

  // Function to close the notification manually if needed
  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const items = [
    'Freelancers',
    'Accountant',
    'Lawyer',
    'Event Planner',
    'Financial Advisor',
    'Personal Trainer',
    'Interior Designer',
    'Translator',
    'Photographer',
    'Video Editor',
  ]; // Add your items here

  const Productitems = [
    {
      name: 'Logo',
      image: '/img/product/logo.jpg'
    },
    {
      name: 'Themes',
      image: '/img/product/theme.jpg'
    },
    {
      name: 'Pdf',
      image: '/img/product/pdf.png'
    },
    {
      name: 'Ebook',
      image: '/img/product/ebooks.jpg'
    },
    // {
    //   name: 'Handmade Product',
    //   image: './img/handmade_product_image.jpg'
    // },
    // {
    //   name: 'Toys Product',
    //   image: './img/toys_product_image.jpg'
    // },
    // {
    //   name: 'Digital Product',
    //   image: './img/digital_product_image.jpg'
    // },
    // {
    //   name: 'Physical Product',
    //   image: './img/physical_product_image.jpg'
    // },
    // {
    //   name: 'Toys Product',
    //   image: './img/toys_product_image.jpg'
    // },
    // {
    //   name: 'Pet Product',
    //   image: './img/pet_product_image.jpg'
    // }
  ];
  
  const Localitems = [
    {
      name: 'Local Products',
      image: './img/products.jpg'
    },
    {
      name: 'Local Prices',
      image: './img/prices.jpg'
    },
    {
      name: 'Local Services',
      image: './img/localservices.jpg'
    },
    {
      name: 'Local Events',
      image: './img/events.jpg'
    },
    
  ];
  const handleDigitalProduct =() =>{
localStorage.setItem("value" , "digital")
navigate('/category')
  }
  const handlePhysicalProduct =() =>{
    localStorage.setItem("value" , "physical")
    navigate('/category')
      }
  const handleMarketplace =() =>{
    localStorage.setItem("value" , "marketplace")
    navigate('/category')
          }
          const handleCategory = (category) => {
            localStorage.setItem("value", category);
            navigate('/category');
          };
 
  const itemHandlers = {
    Freelancers: ()=> handleCategory("Freelancer"),
    Accountant:()=> handleCategory ("Accountant"),
    Lawyer:()=> handleCategory("Lawyer"),
    Teacher:()=> handleCategory("Teacher"),
    // Add more item handlers if needed
  };

  const handleItemClick = (item) => {
    const handler = itemHandlers[item];
    if (handler) {
      handler();
    }
  };      
  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleClose = () => {
    setVisibleItems(5);
    setShowAll(false);
  };
  const handleSeeMoreProduct = () => {
    setShowAllProduct(true);
  };

  const handleCloseProduct = () => {
    setVisibleItems(5);
    setShowAllProduct(false);
  };
  return(
    <>

<Sidebars/>
{showNotification && (
        <div className={`notification${showNotification ? ' show' : ' hide'}`}>
          {/* Your notification content here */}
          <button onClick={handleCloseNotification} className='close-sign'> &times; </button>
          <p>Portdex  does not collect any data at all. Portdex P2P approach enable buyers and sellers encrypted transactions. The email address and the phone number will used for identification of users.  Businesses  and consumer will need to verify  identity for any financial transactions once the platform move to production stage. </p>
         
        </div>
      )}
<div className="containerchat">
        <GlobalStyles/>
     
    <div className=" p-0  margin-left-sidebar responsive-flex">
    
      <div className="chat">
        <div className="height-contain">
          <BlinkingText/>
      <h5 className='text-center mt-3 pt-3 pb-3 color-purple'>
      Portdex.ai will Port & connect you for free. 
      <br/>
      Search & Connect in real Time. 
        </h5>
        <div className="chat-messages justify-content-center">
          <div className="services-list mb-4 ">
          <h6>
             Service  provider
              </h6>
            <ul className='desktop-view'>
             {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
            </ul>
            <ul className='mobile-view'>
        {items.slice(0, showAll ? items.length : visibleItems).map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      {!showAll && <button className='mobile-view more-btn' onClick={handleSeeMore}>See More <i class="fa fa-angle-down"></i> </button>}
      {showAll && <button className='mobile-view more-btn' onClick={handleClose}>Close <i class="fa fa-angle-up"></i> </button>}
          
          </div> 
          <div className="row">
              <div className="services-tabs">
                <ul>
                  <li>
                    <a className={`${selectedOption === 'Product Seller' ? 'activeServices' : ''}`} onClick={() => setSelectedOption('Product Seller')}>
                      Digital Product Seller
                    </a>
                  </li>
                  <li>
                    <a className={`${selectedOption === 'Compare Local' ? 'activeServices' : ''}`} onClick={() => setSelectedOption('Compare Local')}>
                      Local Seller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          <div className="services-list-with-img mt-3">
          <ul className='desktop-view row'>
          {selectedOption === 'Product Seller' && (
            <>
             {Productitems.map((item, index) => (
          <li className='col-md-3' key={index} onClick={() => handleItemClick(item.name)}>
           <a href='/products' className='seller-img' style={{ backgroundImage: `url(${item.image})` }}>
           </a>
           <a href='/products'>
            {item.name}
           </a>
          </li>
        ))}
            </>
            )}
             {selectedOption === 'Compare Local' && (
          <>
          {Localitems.map((item, index) => (
       <li className='col-md-3' key={index} onClick={() => handleItemClick(item.name)}>
          <a className='seller-img' style={{ backgroundImage: `url(${item.image})` }}>
           </a>
           <a>
            {item.name}
           </a>
       </li>
     ))}
         </>
        )}   
            </ul>
           
              <ul className='mobile-view row'>
          {selectedOption === 'Product Seller' && (
            <>
           {Productitems.slice(0, showAllProduct ? Productitems.length : visibleItems).map((item, index) => (
          <li className='col-6' key={index} onClick={() => handleItemClick(item.name)}>
            <a href='/products' className='seller-img' style={{ backgroundImage: `url(${item.image})` }}>
           </a>
           <a href='/products'>
            {item.name}
           </a>
          </li>
        ))}
            </>
            )}
             {selectedOption === 'Compare Local' && (
          <>
        {Localitems.slice(0, showAllProduct ? Localitems.length : visibleItems).map((item, index) => (
          <li className='col-6' key={index} onClick={() => handleItemClick(item.name)}>
             <a className='seller-img' style={{ backgroundImage: `url(${item.image})` }}>
           </a>
           <a>
            {item.name}
           </a>
          </li>
        ))}
         </>
        )}   
            </ul>
          
           <button className='border-none'> </button>
      {/* {showAllProduct && <button className='pt-4 mobile-view more-btn' onClick={handleCloseProduct}>Close <i class="fa fa-angle-up"></i> </button>} */}
          
            {/* {!showAllProduct && <button className='pt-4 mobile-view more-btn' onClick={handleSeeMoreProduct}>See More <i class="fa fa-angle-down"></i> </button>}
      {showAllProduct && <button className='pt-4 mobile-view more-btn' onClick={handleCloseProduct}>Close <i class="fa fa-angle-up"></i> </button>}
           */}
            </div>
           
             {/* <div className="col-lg-4 col-md-4 col-12 text-center">
              <h6>
             Service  provider
              </h6>
              
              <div className="row d-flex">
                <div className="col-lg-12 col-6">
                <div className="gray-boxes " onClick={handleFreelancers}>
                <p>
                Freelancers
                </p>
              </div>
                </div>
                <div className="col-lg-12 col-6">
                <div className="gray-boxes" onClick={handleAccountant}>
                <p>
                  Accountant
                </p>
              </div>
                </div>
             

              <div className="col-lg-12 col-6">
              <div className="gray-boxes" onClick={handleLawyer}>
                <p>
                  Lawyers
                </p>
              </div>
              </div>

              </div>

            </div> */}
            
        </div>
        
        </div>
        <div className="chat-fixed">
        <form className="chat-form">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
          <br/>
          <div>
          
          </div>
          
        </form>
        <p>
            Get More Information about  <a href="/blockchain"> Portdex.ai </a>
          </p>
          </div>
      </div>
      </div>

     
         
    </div>
    </>
);
  };
export default Home;