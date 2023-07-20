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



const SendMessagePopup= () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(userData)

  console.log("filter" , filteredData)
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions)
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setName('');
    setPhoneNumber('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const sendMessage = () => {
    axios.post('http://localhost:5000/api/send-message', {
      name,
      phoneNumber,
    })
    .then((response) => {
      console.log(response.data);
      closePopup();
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
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
  
  
  
  return(
    <>
<Sidebars/>
<div className="containerchat">
        <GlobalStyles/>
        <div className="row">

   <WebSidebar/>
    <div className="col-lg-9 col-9 p-0 responsive-flex">
    
      <div className="chat">
      <div className='height-contain'>
      <div>
      <button onClick={openPopup}>Send Message</button>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2>Send Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
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
     
    </div>
    </>
);
  };
export default SendMessagePopup;