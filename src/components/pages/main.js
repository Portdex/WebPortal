import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebars from '../menu/sidebar';

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
  .RhtDT
  {
    display:none !important;
    background-color:white !important;
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
const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color:#8364e2;
  height:94px
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BetaBadge = styled.span`
  background-color: white;
  color: #8364e2;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight:600;
`;
const PortdexText = styled.span`
margin-left: 20px;
font-size: 24px;
margin-right: 10px;
font-weight: 600;
color:white
`;

const SignInButton = styled.button`
  background-color: white;
  color: #8364e2;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight:600
`;

const Main = () => {
  const sentences = [
    "will enable consumers to connect with service providers directly in real-time and enable businesses' real-time payments settlement through open banking API.",
    "will allow small companies to offer recurring payments such as monthly subscriptions, rent installments, monthly packages, and shopping.",
    "will enable businesses and customers to Port, anonymize & monetize commercial data, & financial data.",
    "will act as a comparison marketplace of local digital and physical products and sellers by porting data.",
    "will enable multicurrency transactions and will encrypt buyer and seller transactions.",
    "will protect consumers by scanning online product sellers."
    // Add more sentences here as needed
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showingSentence, setShowingSentence] = useState(true);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      if (currentCharIndex < sentences[currentSentenceIndex].length - 1) {
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        // Finished displaying the current sentence
        setShowingSentence(false);
      }
    }, 50); // Adjust the delay time to control the typing speed (in milliseconds)

    return () => {
      clearTimeout(animationTimer);
    };
  }, [currentSentenceIndex, currentCharIndex]);

  useEffect(() => {
    if (!showingSentence) {
      const delayTimer = setTimeout(() => {
        // Move to the next sentence after the delay period
        setCurrentSentenceIndex((prevIndex) =>
          prevIndex + 1 < sentences.length ? prevIndex + 1 : 0
        );
        setCurrentCharIndex(0);
        setShowingSentence(true);
      }, 2000); // 5 seconds delay (you can adjust this value as needed)

      return () => {
        clearTimeout(delayTimer);
      };
    }
  }, [showingSentence]);
const navigate=useNavigate();
  return (
    <>
    <Sidebars/>
    <GlobalStyles/>
    <HeaderContainer>
      <LogoContainer>
        
      <PortdexText>Portdex</PortdexText>
        <BetaBadge>Beta</BetaBadge>
        {/* Add your logo or other branding elements here if needed */}
      </LogoContainer>
      <Link to='https://business.portdex.ai/web/login' target='_blank'>
      <SignInButton> Join SME's Beta </SignInButton>
      </Link>
    </HeaderContainer>
    <section className='pt-5 mt-5  margin-left-sidebar'>
      <div className=" main-screeen">
      <div className="typing-animation">
     
      <p  className='main-variable'>  <span className='static-variable'>Portdex</span> <span className='dynamic-variable'> {sentences[currentSentenceIndex].substring(0, currentCharIndex)} </span></p>
    </div>
    <div className="main-text-container">
    <p className='main-text'>
    Portdex's aim is to eliminate third-party platforms and would make one-click real-time connectivity and instant small businesses payment settlements.
    <br/>
    <br/>
    Portdex is at the beta stage and uses AI, machine learning, and Blockchain technologies for transactional-level transparency and traceability.
    </p>
   <button className='align-self-end' onClick={()=>navigate('/home')}> Continue </button>
</div>
      </div>
    </section>
    
    </>
  );
};

export default Main;
