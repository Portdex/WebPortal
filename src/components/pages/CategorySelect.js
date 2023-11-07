import React , {useState , useEffect} from 'react';
import '../../assets/chat.css'
import styled , { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import fetch from '../../data/fetch';
import { useNavigate, } from "react-router-dom";
import Sidebars from '../menu/sidebar';
import PackageModal from '../components/PackageModal';
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
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  console.log(userData)
  console.log("filter" , filteredData)
  const [valueData, setValueData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupName, setPopupName] = useState('');
  const [popupPhoneNumber, setPopupPhoneNumber] = useState('');
  const [showAllCategory, setShowAllCategory] = useState(false);
    const [visibleItems, setVisibleItems] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
  const handleSellerClick = (username) => {
    // console.log("Clicked the View Packages button");
    // setIsModalOpen(true);
    navigate(`/details/${username}`);
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
      setValueData(storedData);
      console.log(valueData)
    }
  }, []);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };
  useEffect(() => {
    fetch()
    .then(data => {
      data=data.data.results.users;
      setUserData(data);
      // setFilteredProducts(data); 
   
    if (valueData) {
      const matchingUsers = userData.filter(
        (user) => user.services === valueData
      );
      setSelectedUsers(matchingUsers);
      console.log('matchingUsers ', matchingUsers)
    }
  })
    .catch((error) => console.error(error));
    window.scrollTo(0, 0);
  }, []);
 
  const options = {
    SoftwareDeveloper: [
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
      // ... more options ...
    ],
    Accountant: [
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
      // ... more options ...
    ],
    Lawyer: [
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
      // ... more options ...
    ],
  };

// function handleCheckboxChange(checkboxValue) {
//   let updatedCheckboxes = [...checkboxes];

//   if (updatedCheckboxes.includes(checkboxValue)) {
//     updatedCheckboxes = updatedCheckboxes.filter(value => value !== checkboxValue);
//   } else {
//     updatedCheckboxes.push(checkboxValue);
//   }

//   setCheckboxes(updatedCheckboxes);

//   // Filter the user data based on selected checkboxes
//   const filtered = userData.filter(user =>
//     user.category.some(category => updatedCheckboxes.includes(category.name))
//   );
//   setFilteredData(filtered);
//   setInputValue(`I am looking for a ${updatedCheckboxes.join(', ')}`);
// }
useEffect(() => {
  // Update filteredData whenever userData or valueData changes
  setFilteredData(userData.filter(user => user.services === valueData));
}, [userData, valueData]);
function handleCheckboxChange(checkboxValue) {
  let updatedCheckboxes = [...checkboxes];

  if (updatedCheckboxes.includes(checkboxValue)) {
    updatedCheckboxes = updatedCheckboxes.filter(value => value !== checkboxValue);
  } else {
    updatedCheckboxes.push(checkboxValue);
  }

  setCheckboxes(updatedCheckboxes);

  // If no checkboxes are selected, show sellers with valueData service
  if (updatedCheckboxes.length === 0) {
    const matchingSellers = userData.filter(user => user.services === valueData);
    setFilteredData(matchingSellers);
  } else {
    // Filter the user data based on selected checkboxes
    const filtered = userData.filter(user =>
      user.category.some(category => updatedCheckboxes.includes(category.name))
    );
    setFilteredData(filtered);
    setInputValue(`I am looking for a ${updatedCheckboxes.join(', ')}`);
  }
}

  
  return(
    <>
    {isPopupOpen && <div className="overlay-chat" onClick={closePopup}></div>}
<Sidebars/>
<div className="containerchat">
        <GlobalStyles/>
      

  
    <div className="margin-left-sidebar p-0 responsive-flex">
    
      <div className="chat">
        <div className="height-contain">
      <h6 className='text-center px-3 mt-5 responsive-padding pb-3 color-purple'>
      Select the services you need, Let Portdex do the rest. <br className='hide-responsive'/> Service Providers will come back to you with a Quote. 
        </h6>
        <div className="chat-messages d-flex justify-content-center flex-column">
          <div className="row">
    
   <ul className='m-auto category-list desktop-view'>
     
   {options[valueData]?.slice(0, showAllCategory ? options[valueData]?.length : visibleItems).map((option) => (
          <li key={option} className="">
            <label className="custom-checkbox">
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
       {options[valueData]?.slice(0, showAllCategory ? options[valueData]?.length : visibleItems).map((option) => (
          <li key={option} className="">
            <label className="custom-checkbox">
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
              {!showAllCategory && <button className=' more-btn' onClick={handleSeeMore}>See More <i class="fa fa-angle-down"></i> </button>}
              {showAllCategory && <button className=' more-btn' onClick={handleClose}>Close <i class="fa fa-angle-up"></i> </button>} 
        {/* {showAllCategory && <button className='mobile-view more-btn' onClick={handleClose}>Close <i class="fa fa-angle-up"></i> </button>} */}
     
            
    
            <div className="row mx-auto pt-4">

            {filteredData.map((author) => (
<div  key={author.username} class="col-lg-4 community-main col-6 p-3 pt-0">
  <div className='community-column'>
 
  <div class="community-card text-center p-4">
    <div class="img-container long-cards">
      <img src="/img/favicon.ico" />
    </div>
    <h3 className="community-h3 mb-2">{author.username}</h3>
    <p className="m-0 mb-2">{author.services || '-'}</p> 
    <div class="community-icons">
    <i class="f-size fa fa-fw fa-facebook" aria-hidden="true" title="Copy to use facebook-square"></i>
<i class="f-size fa fa-fw fa-linkedin" aria-hidden="true" title="Copy to use linkedin-square"></i>

<i class="f-size fa fa-fw fa-whatsapp" aria-hidden="true" title="WhatsApp"></i>

<i class="f-size fa fa-fw fa-twitter" aria-hidden="true" title="Copy to use twitter-square"></i>


    </div>
    
    <div className="button-boxes">
      <div className="row">
        <div className="col-lg-12 view-package-btn text-center">
          <a onClick={() => handleSellerClick(author.username)} >
          View Packages
          </a>
        </div>
        {/* <div className="col-lg-6 view-package-btn">
          Book
        </div> */}
      </div>
    </div>
  </div>
 
  </div>
</div>

))}
        </div>
            
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
      {isModalOpen && (
        <div className={`packagemodal-overlay ${isModalOpen ? 'active' : 'disable'}`} onClick={handleCloseModal}>
          <div className={`packagemodal ${isModalOpen ? 'packageactive' : ''}`}>
            <div className="packagemodal-content">
              <div>
              <a onClick={handleCloseModal} className='cancel-button' >&#x2716;</a>
              </div>

              {/* Your modal content goes here */}
             <PackageModal/>
            </div>
          </div>
        </div>
      )}
    </div>
    {isPopupOpen && (
        <PopupContainer className='popup-responsive'>
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