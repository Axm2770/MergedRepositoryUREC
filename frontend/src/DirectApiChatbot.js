import React, { useState, useEffect, useRef } from 'react';
import './ChatbotWidget.css'; // Reuse the existing CSS

const SimplifiedApiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  
  // Langflow configuration
  const flowId = "33785933-6aa1-424f-9fed-12b251e5b0da";
  const apiUrl = `http://localhost:7868/api/v1/run/${flowId}`;
  const customTitle = "FAQ Assistant";
  
  // Generate a unique session ID for this chat session
  const sessionId = useRef(`user_${Math.random().toString(36).substring(2, 9)}`);
  
  // Function to send a message to the Langflow API with robust error handling
  const sendMessage = async (message) => {
    setIsLoading(true);
    setError(null);

    // Add user message to the chat
    setMessages(prev => [...prev, { role: 'user', content: message }]);

    // Build payload
    const payload = {
      input_value: message,
      output_type: "chat",
      input_type: "chat",
      session_id: sessionId.current,
    };

    try {
      const resp = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`HTTP ${resp.status}: ${text}`);
      }

      const data = await resp.json();

      // Extract the assistant's response
      const assistantReply =
        data.outputs?.[0]?.outputs?.[0]?.artifacts?.message
        ?? "⚠️ Couldn’t find a reply in the response.";

      // Add assistant message to the chat
      setMessages(prev => [...prev, { role: 'assistant', content: assistantReply }]);
    } catch (err) {
      console.error("Error calling chat API:", err);
      setError(err.message);
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err.message}` }]);
    }

    setIsLoading(false);
    setInputValue('');
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
    }
  };
  
  // Auto-scroll to the bottom of the chat when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Function to manually open the chatbot
  const openChatbot = () => {
    setIsOpen(true);
  };

  // Use effect to add event listeners for help buttons
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('.help-button') || 
          e.target.closest('.question-mark') ||
          (e.target.tagName === 'A' && e.target.getAttribute('href') === '#faq')) {
        e.preventDefault();
        openChatbot();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!isOpen) {
    return null; // Don't render anything when closed
  }

  return (
    <div className="chatbot-widget">
      <div className="chatbot-header">
        <h3>{customTitle}</h3>
        <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
      </div>
      <div className="chatbot-body">
        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <p>Hello! How can I help you today?</p>
              {error && (
                <p className="error-message">
                  There was an error connecting to the API. Please try again later.
                </p>
              )}
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
              >
                <div className="message-content">{message.content}</div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="message assistant-message">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="chat-input"
          />
          <button 
            type="submit" 
            disabled={isLoading || !inputValue.trim()} 
            className="send-button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimplifiedApiChatbot;