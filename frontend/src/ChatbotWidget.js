import React, { useState, useEffect } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Your Langflow configuration
  const flowId = "33785933-6aa1-424f-9fed-12b251e5b0da";
  const hostUrl = "http://localhost:7868";
  const customTitle = "FAQ Assistant";
  
  // Build the full URL to your flow
  const chatUrl = `${hostUrl}/chat/${flowId}`;

  // Function to manually open the chatbot
  const openChatbot = () => {
    setIsOpen(true);
  };

  // Use effect to add event listeners
  useEffect(() => {
    // Function to handle clicking help buttons
    const handleHelpClick = (event) => {
      // Find all elements with help-button or question-mark classes
      const helpButtons = document.querySelectorAll('.help-button, .question-mark');
      
      // Check if the clicked element is one of our help buttons
      helpButtons.forEach(button => {
        if (button.contains(event.target)) {
          event.preventDefault();
          event.stopPropagation();
          openChatbot();
        }
      });
    };

    // Add the event listener
    document.addEventListener('click', handleHelpClick);
    
    // Log that we're set up for debugging
    console.log('Chatbot event listeners attached');
    
    // Cleanup when component unmounts
    return () => {
      document.removeEventListener('click', handleHelpClick);
    };
  }, []);

  // Add a debug button just for testing
  const DebugButton = () => (
    <button 
      onClick={openChatbot}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        padding: '10px',
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '5px',
        zIndex: 1000
      }}
    >
      Open Chatbot (Debug)
    </button>
  );

  return (
    <>
      {/* Debug button - remove in production */}
      <DebugButton />
      
      {isOpen && (
        <div className="chatbot-widget">
          <div className="chatbot-header">
            <h3>{customTitle}</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-body">
            <iframe 
              src={chatUrl}
              title="Langflow Chat"
              className="chatbot-iframe"
              frameBorder="0"
              allow="microphone"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;