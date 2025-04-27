import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminHome from './AdminHome';
import UserHome from './UserHome';
import StudentCreateTeam from './StudentCreateTeam';
import SimplifiedApiChatbot from './DirectApiChatbot'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleNavigateHome = () => {
    setIsLoggedIn(false);
    setUserType('');
  };

  return (
    <Router>
      {/* The SimplifiedApiChatbot is added here */}
      <SimplifiedApiChatbot />
      
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              userType === 'admin' ? (
                <AdminHome onNavigateHome={handleNavigateHome} />
              ) : (
                <UserHome onNavigateHome={handleNavigateHome} />
              )
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        {/* Protect the StudentCreateTeam route */}
        <Route
          path="/student-create-team"
          element={isLoggedIn ? <StudentCreateTeam /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

function LoginPage({ onLogin }) {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">ℙℙ</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#rules">Rules</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <div className="profile">
          <img src="/api/placeholder/40/40" alt="Profile" className="profile-image" />
          <span className="dropdown-arrow">▼</span>
        </div>
      </header>

      <main className="login-container">
        <div className="login-section">
          <h2 className="login-title">Admin</h2>
          <LoginForm userType="Admin" onLogin={() => onLogin('admin')} />
        </div>

        <div className="divider"></div>

        <div className="login-section">
          <h2 className="login-title">Student</h2>
          <LoginForm userType="Student" onLogin={() => onLogin('student')} />
        </div>
      </main>

      {/* The help button with the class that will trigger the chatbot */}
      <div className="help-button">
        <span className="question-mark">?</span>
      </div>
    </div>
  );
}

function LoginForm({ userType, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={`${userType.toLowerCase()}-username`}>Username</label>
        <input
          type="text"
          id={`${userType.toLowerCase()}-username`}
          placeholder="Value"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${userType.toLowerCase()}-password`}>Password</label>
        <input
          type="password"
          id={`${userType.toLowerCase()}-password`}
          placeholder="Value"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="login-button">
        {userType} Login
      </button>
    </form>
  );
}

export default App;