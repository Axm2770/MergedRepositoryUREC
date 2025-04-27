import React, { useState } from 'react';
import './CreateTournament.css';

function CreateTournament({ onNavigateHome }) {
  const [tournamentName, setTournamentName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      tournamentName,
      date,
      location,
      otherInfo
    });
    
    // Navigate back to admin homepage after creating
    onNavigateHome();
  };

  return (
    <div className="tournament-page">
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
      
      <div className="tournament-content">
        <h1 className="tournament-title">New Tournament</h1>
        
        <form className="tournament-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tournament-name">Name</label>
            <input 
              type="text" 
              id="tournament-name" 
              className="form-input" 
              placeholder="Value"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tournament-date">Date</label>
            <input 
              type="text" 
              id="tournament-date" 
              className="form-input" 
              placeholder="Value"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tournament-location">Location</label>
            <input 
              type="text" 
              id="tournament-location" 
              className="form-input" 
              placeholder="Value"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tournament-info">Other Info</label>
            <input 
              type="text" 
              id="tournament-info" 
              className="form-input" 
              placeholder="Value"
              value={otherInfo}
              onChange={(e) => setOtherInfo(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="create-button">
              Create Tournament
            </button>
          </div>
        </form>
      </div>
      
      <div className="help-button">
        <span className="question-mark">?</span>
      </div>
    </div>
  );
}

export default CreateTournament;