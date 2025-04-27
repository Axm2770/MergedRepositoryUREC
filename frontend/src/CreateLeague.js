import React, { useState } from 'react';
import './CreateLeague.css';
import CreateDivision from './CreateDivision';

function CreateLeague({ onNavigateHome }) {
  const [leagueName, setLeagueName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [currentView, setCurrentView] = useState('createLeague');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      leagueName,
      startDate,
      endDate,
      location,
      otherInfo
    });
    
    // Navigate back to admin homepage after publishing
    onNavigateHome();
  };

  // Navigate back from division page to league page
  const handleNavigateBackFromDivision = () => {
    setCurrentView('createLeague');
  };

  // If current view is createDivision, render the CreateDivision component
  if (currentView === 'createDivision') {
    return <CreateDivision onNavigateHome={handleNavigateBackFromDivision} />;
  }

  return (
    <div className="league-page">
      <header className="header">
        <div className="logo" onClick={onNavigateHome}>
          <span className="logo-icon">ℙℙ</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <div className="profile">
          <img src="/api/placeholder/40/40" alt="Profile" className="profile-image" />
          <span className="dropdown-arrow">▼</span>
        </div>
      </header>
      
      <div className="league-header-banner">
        <div className="title-bar">New League</div>
      </div>

      <main className="league-content">
        <div className="league-form-container">
          <h1 className="section-title">League Information</h1>
          
          <form className="league-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="league-name">League Name</label>
              <input 
                type="text" 
                id="league-name" 
                className="form-input" 
                placeholder="Value"
                value={leagueName}
                onChange={(e) => setLeagueName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="start-date">Start Date</label>
              <input 
                type="text" 
                id="start-date" 
                className="form-input" 
                placeholder="Value"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="end-date">End Date</label>
              <input 
                type="text" 
                id="end-date" 
                className="form-input" 
                placeholder="Value"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                id="location" 
                className="form-input" 
                placeholder="Value"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="other-info">Other Information</label>
              <input 
                type="text" 
                id="other-info" 
                className="form-input" 
                placeholder="Value"
                value={otherInfo}
                onChange={(e) => setOtherInfo(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button 
                type="button" 
                className="action-button"
                onClick={() => setCurrentView('createDivision')}
              >
                Add Division
              </button>
              
              <button type="submit" className="action-button">
                Publish League
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateLeague;