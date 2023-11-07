import React, { useState, useEffect } from 'react';
import '../../assets/chat.css';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebars from '../menu/sidebar';
import BlinkingText from '../components/Blinking';

const GlobalStyles = createGlobalStyle`
  .navbar {
    display: none;
  }
  header {
    display: none;
  }
  .navbarHome {
    display: none;
  }

  @media (max-width: 895px) {
    .chat-sidebar {
      display: none;
    }
    .navbarHome {
      display: block;
    }
    .responsive-flex {
      width: 100%;
    }
  }
`;

const Chat = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]); // Initialize with an empty array
  
    const handleSendMessage = () => {
      if (inputValue.trim() !== '') {
        // Add user message to the messages array
        setMessages([...messages, { text: inputValue, isUser: true }]);
        setInputValue('');
      }
    };
  
    useEffect(() => {
        // Simulate a computer message after a delay, but not on the initial load
        if (messages.length > 0 && messages.length % 2 === 0) {
          setTimeout(() => {
            setMessages([...messages, { text: 'Hello, Thanks for messaging us. We`ll get back to you soon.', isUser: false }]);
          }, 1000);
        }
      }, [messages]);
  return (
    <>
      <Sidebars />
      <div className="containerchat">
        <GlobalStyles />

        <div className="p-0 margin-left-sidebar responsive-flex">
          <div className="chat">
            <div className="height-contain">
              <BlinkingText />
              <div className="chat-messages justify-content-center">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.isUser ? 'user-message' : 'computer-message'}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="chat-fixed">
              <form
                className="chat-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                />
                <button type="submit">Send</button>
                <br />
              </form>
              <p>Get More Information about <a href="/blockchain">Portdex.ai</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
