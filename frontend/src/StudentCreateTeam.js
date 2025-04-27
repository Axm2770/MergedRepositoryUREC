// StudentCreateTeam.js
import './StudentCreateTeam.css'; 
import React, { useState } from 'react';

function StudentCreateTeam() {
    const [teamName, setTeamName] = useState('');
    const [passCode, setPassCode] = useState('');
  
    const handleTeamNameChange = (e) => setTeamName(e.target.value);
    const handlePasscodeChange = (f) => setPassCode(f.target.value);
  return (
    <div className="user-page">
    <header className="header">
      <div className="title-bar">User Home Page</div>
      <div className="user-header">
        <div className="logo">
          <span className="logo-icon">ℙℙ</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#tournaments">Tournaments</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#messages">Messages</a></li>
          </ul>
        </nav>
        <div className="profile">
          <img src="/api/placeholder/40/40" alt="Profile" className="profile-image" />
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </header>

    <form>
        <h1 className="big-bold-text">New Team</h1>
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input
              type="text"
              id="teamName"
              placeholder="Enter team name"
              className="form-input"
              value={teamName}
              onChange={handleTeamNameChange}
            />
          </div>

         
          </form>
          <form>
          <div className="form-group">
            <label htmlFor="passCode">Passcode</label>
            <input
              type="text"
              id="passCode"
              placeholder="Enter passcode"
              className="form-input"
              value={passCode}
              onChange={handlePasscodeChange}
            />
          </div>
            <button type="submit" className="round-button">
                Create Team
            </button>
          </form>


    </div>
    
  );
}

export default StudentCreateTeam; 