import React , {useState , useEffect} from 'react';
import { keyframes } from "@emotion/react";
import '../../assets/chat.css'
import styled , { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import fetch from './fetch';
import { 
  Link, 
  useNavigate, 
  useMatch,
  useResolvedPath
} from "react-router-dom";
import Sidebars from '../menu/sidebar';
import WebSidebar from '../menu/webSidebar';
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

const Container = styled.div`
display: flex;
`;

const Sidebar = styled.div`
background-color: #f2f2f2;
width: 250px;
height: 100vh;
position: fixed;
top: 0;
left: 0;
animation: ${fadeInUp} 0.3s ease;

@media (max-width: 776px) {
  display: none;
}
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  border-radius:10px
`;

const PopupInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
`;

const PopupButton = styled.button`
  padding: 8px 16px;
  background-color: #8364e2;
  color: #fff;
  border: none;
  cursor: pointer;
  margin:10px
`;


const CategorySelect= () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState([]);
  const [checkboxes, setCheckboxes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(userData)
  console.log("filter" , filteredData)
  const [data, setData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupName, setPopupName] = useState('');
  const [popupPhoneNumber, setPopupPhoneNumber] = useState('');
  const [showAllCategory, setShowAllCategory] = useState(false);
    const [visibleItems, setVisibleItems] = useState(5);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupName('');
    setPopupPhoneNumber('');
  };

  const handlePopupNameChange = (event) => {
    setPopupName(event.target.value);
  };

  const handlePopupPhoneNumberChange = (event) => {
    setPopupPhoneNumber(event.target.value);
  };
  const handleSeeMore = () => {
    setShowAllCategory(true);
  };

  const handleClose = () => {
    setVisibleItems(5);
    setShowAllCategory(false);
  };

  const sendPopupMessage = () => {
    // Call the Twilio API via your server to send the message
    axios.post('http://localhost:5000/api/send-message', {
      name: popupName,
      phoneNumber: popupPhoneNumber,
      message: inputValue,
    })
      .then((response) => {
        console.log('Message sent successfully!');
        console.log(response.data);
        // Add any success message or actions you want to perform after the message is sent
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        // Handle the error or show an error message to the user
      });

    closePopup(); // Close the popup after sending the message
  };

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("value");
    
    // Check if data exists in local storage
    if (storedData) {
      // If data exists, update the state with the retrieved data
      setData(storedData);
      console.log(data)
    }
  }, []);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    
    fetch()
    .then(data => {
      data=data.data.results.users;
      setUserData(data);
      // setFilteredProducts(data); 
    })
    .catch((error) => console.error(error));
    window.scrollTo(0, 0);
  }, []);
  const accountantOptions = [
    'Annual accounts',
    'Bookkeepers',
    'Payroll',
    'VAT',
    'Tax filing',
    'Tax planning',
    'Business tax',
    'Personal tax',
    'Inheritance tax',
    'International business',
    'Establishing a UK base or branching out overseas',
    // Add more options as needed
  ];
  const lawyerOptions = [
    'Products & Services',
    'Divorce Law',
    'Family Law',
    'Human Rights Law',
    'Immigration Advice',
    'Civil Litigation',
    'Matrimonial Law',
    'Childrens Law',
    'Legal Advice',
    'Legal Services',
    'Power of Attorney',
    'Residential Conveyancing',
    'Commercial Conveyancing',
    'Conveyancing',
    'Wills',
    'Probate',
    'Asylum',
    'Naturalisation',
    'British Citizenship',
    'Compromise Agreement for Employees',
    'Employment Law',
    'The Law Society Member',
    // Add more options as needed
  ];
  const freelancerOptions = [
    'Web Design',
    'Graphic Design',
    'Business Consultants',
    'Party Organiser',
    'Tour guide',
    'House Services',
    'Mechanics',
    'Game Developers',
    'Blog Writers',
    'Full Stack Developers'
    // Add more options as needed
  ];
function handleCheckboxChange(checkboxValue) {
  let updatedCheckboxes = [...checkboxes];

  if (updatedCheckboxes.includes(checkboxValue)) {
    updatedCheckboxes = updatedCheckboxes.filter(value => value !== checkboxValue);
  } else {
    updatedCheckboxes.push(checkboxValue);
  }

  setCheckboxes(updatedCheckboxes);

  // Filter the user data based on selected checkboxes
  const filtered = userData.filter(user =>
    user.category.some(category => updatedCheckboxes.includes(category.name))
  );
  setFilteredData(filtered);
  setInputValue(`I am looking for a ${updatedCheckboxes.join(', ')}`);
}
const handleSellerClick = (username) => {
  navigate(`/seller/${username}`);
};
  
  return(
    <>
    {isPopupOpen && <div className="overlay-chat" onClick={closePopup}></div>}
<Sidebars/>
<div className="containerchat">
        <GlobalStyles/>
      

  
    <div className="margin-left-sidebar p-0 responsive-flex">
    
      <div className="chat">
        <div className="height-contain">
      <h6 className='text-center px-3 mt-5 pt-5 pb-3 color-purple'>
      Select the services you need, Let Portdex do the rest. <br/> Service Providers will come back to you with a Quote. 
        </h6>
        <div className="chat-messages d-flex justify-content-center flex-column">
        
  {data === "freelancer" ?
  <>
  <ul className='m-auto category-list desktop-view'>
        {freelancerOptions.map((option, index) => (
            <li key={option} className=''>
          <label className='custom-checkbox'>
            <input
              type="checkbox"
              value={option}
              checked={checkboxes.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
           &nbsp; {option}
           <span class="checkmark"></span>
          </label>
        </li> 
      ))}
      </ul> 
      <ul className='m-auto category-list mobile-view'>
      {freelancerOptions.slice(0, showAllCategory ? freelancerOptions.length : visibleItems).map((option, index) => (
          <li key={option} className=''>
        <label className='custom-checkbox'>
          <input
            type="checkbox"
            value={option}
            checked={checkboxes.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
         &nbsp; {option}
         <span class="checkmark"></span>
        </label>
      </li> 
    ))}
    </ul> 
    {!showAllCategory && <button className='mobile-view more-btn' onClick={handleSeeMore}>See More <i class="fa fa-angle-down"></i> </button>}
      {showAllCategory && <button className='mobile-view more-btn' onClick={handleClose}>Close <i class="fa fa-angle-up"></i> </button>}
    </>
            :
            <></>
        }   
          {data === "accountant" ?
          <>
 <ul className='m-auto category-list desktop-view'>
   
 {accountantOptions.map((option, index) => (
           <li key={option} className=''>
          <label className='custom-checkbox'>
            <input
              type="checkbox"
              value={option}
              checked={checkboxes.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
           &nbsp; &nbsp; {option}
           <span class="checkmark"></span>
          </label>
        </li>
      ))}
            </ul>
            <ul className='m-auto category-list mobile-view'>
      {accountantOptions.slice(0, showAllCategory ? accountantOptions.length : visibleItems).map((option, index) => (
          <li key={option} className=''>
          <label className='custom-checkbox'>
            <input
              type="checkbox"
              value={option}
              checked={checkboxes.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
           &nbsp; &nbsp; {option}
           <span class="checkmark"></span>
          </label>
        </li>
      ))}
            </ul>
            {!showAllCategory && <button className='mobile-view more-btn' onClick={handleSeeMore}>See More <i class="fa fa-angle-down"></i> </button>}
      {showAllCategory && <button className='mobile-view more-btn' onClick={handleClose}>Close <i class="fa fa-angle-up"></i> </button>}
            </>
            :
            <></>
        } 
         {data === "lawyer" ?
         <>
 <ul className='m-auto category-list desktop-view'>
        {lawyerOptions.map((option, index) => (
          <li key={option} className=''>
          <label className='custom-checkbox'>
            <input
              type="checkbox"
              value={option}
              checked={checkboxes.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
           &nbsp; &nbsp; {option}
           <span class="checkmark"></span>
          </label>
        </li>
      ))}
      </ul>
      <ul className='m-auto category-list mobile-view'>
      {lawyerOptions.slice(0, showAllCategory ? lawyerOptions.length : visibleItems).map((option, index) => (
          <li key={option} className=''>
          <label className='custom-checkbox'>
            <input
              type="checkbox"
              value={option}
              checked={checkboxes.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
           &nbsp; &nbsp; {option}
           <span class="checkmark"></span>
          </label>
        </li>
        ))}
        </ul>
        {!showAllCategory && <button className='mobile-view more-btn' onClick={handleSeeMore}>See More <i class="fa fa-angle-down"></i> </button>}
      {showAllCategory && <button className='mobile-view more-btn' onClick={handleClose}>Close <i class="fa fa-angle-up"></i> </button>}
      </>
            :
            <></>
        } 
<hr className='custom-hr'/>

        
        <div className="row">

        { filteredData && filteredData.map((author) => (
        <div  key={author.username} class="col-lg-4 col-md-6 col-6 p-3 pt-0">
          <div className='community-column text-center'>
         
          <div class="community-card p-3">
            <div class="img-container">
              <img src="img/favicon.ico" />
            </div>
            <h3 className="community-h3 mb-2">{author.username}</h3>
            <p className="m-0 mb-2">{author.services || '-'}</p>
            <div class="community-icons">
            {author.payment_method.length > 0 ? (
author.payment_method.slice(0, 4).map((item, index) => (
  <span className="bot" key={item.name} >
    {item.name || '-'} 
    {index !== author.payment_method.slice(0, 4).length - 1 && ', '}
  </span>
))
) : (
<span className="bot"> - </span>
)}
{author.payment_method.length > 4 && <span className="bot"> ...</span>}

            </div>
            <div className="button-boxes">
              <div className="row">
                <div onClick={() => handleSellerClick(author.username)} className="col-lg-6 view-package-btn">
                  View Packages
                </div>
                <div className="col-lg-6 view-package-btn">
                  Book
                </div>
              </div>
            </div>
          </div>
         
          </div>
        </div>
        
        ))}
                </div>
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
          <button type="button" onClick={openPopup}>Send</button>
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
    {isPopupOpen && (
        <PopupContainer>
          <h3>Send Message</h3>
          <PopupInput
            type="text"
            placeholder="Enter your name"
            value={popupName}
            onChange={handlePopupNameChange}
          />
          <PopupInput
            type="tel"
            placeholder="Enter your phone number"
            value={popupPhoneNumber}
            onChange={handlePopupPhoneNumberChange}
          />
          <div>
            {popupName && popupPhoneNumber ?
            <PopupButton onClick={sendPopupMessage}>Done</PopupButton>
            :
            <PopupButton disabled className='disabled'>Done</PopupButton>
          }
            <PopupButton onClick={closePopup}>Cancel</PopupButton>
          </div>
        </PopupContainer>
      )}
    </>
);
  };
export default CategorySelect;