import React , {useState , useEffect} from 'react';
import { keyframes } from "@emotion/react";
import '../../assets/chat.css'
import styled , { createGlobalStyle } from 'styled-components';

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

  

const NavLink = (props) => {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      {...props}
      className={ match ? 'active' : 'non-active'}
    />
  )
};


const CategorySelect= () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState([]);
  const [checkboxes, setCheckboxes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(userData)

  console.log("filter" , filteredData)
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions)
  const [data, setData] = useState(null);

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
<Sidebars/>
<div className="containerchat">
        <GlobalStyles/>
        <div className="row">

   <WebSidebar/>
    <div className="col-lg-9 col-9 p-0 responsive-flex">
    
      <div className="chat">
        <div className="height-contain">
      <h6 className='text-center px-3 mt-5 pt-5 pb-3 color-purple'>
      Let the local service providers come back to you with price in real time. <br/> Portdex will enable you to book and pay with one click
        </h6>
        <div className="chat-messages d-flex justify-content-center flex-column">
        
  {data === "freelancer" ?
  <div className='m-auto'>
    <div className="row">
        {freelancerOptions.map((option, index) => (
            <div className="col-lg-6 col-md-6">
            <div key={option} className='m-auto '>
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
        </div>
            </div>
        
      ))}
      </div>
            </div>
            :
            <></>
        }   
          {data === "accountant" ?
  <div className='m-auto'>
    <div className="row">
    {accountantOptions.map((option, index) => (
      <div className="col-lg-6 col-md-6">
           <div key={option} className='m-auto '>
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
        </div>
        </div>
      ))}
    </div>
       
            </div>
            :
            <></>
        } 
         {data === "lawyer" ?
  <div className='m-auto'>
    <div className="row">
        {lawyerOptions.map((option, index) => (
          <div className="col-lg-6 col-md-6">
          <div key={option} className='m-auto '>
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
        </div>
        </div>
      ))}
      </div>
            </div>
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
          <button type="submit">Send</button>
          <br/>
          <div>
          
          </div>
          
        </form>
        <p>
            Get More Information about  <a href="/about"> Portdex.ai </a>
          </p>
          </div>
      </div>
      </div>
      </div>
     
    </div>
    </>
);
  };
export default CategorySelect;