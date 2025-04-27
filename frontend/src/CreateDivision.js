import React, { useState } from 'react';
import './CreateDivision.css';

function CreateDivision({ onNavigateHome }) {
  const [divisionName, setDivisionName] = useState('');
  const [divisionGender, setDivisionGender] = useState('');
  const [minRosterSize, setMinRosterSize] = useState('');
  const [allowedRosterSize, setAllowedRosterSize] = useState(50);
  const [allowedNumberOfTeams, setAllowedNumberOfTeams] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      divisionName,
      divisionGender,
      minRosterSize,
      allowedRosterSize,
      allowedNumberOfTeams
    });
    
    // Navigate back after publishing
    onNavigateHome();
  };

  return (
    <div className="division-page">
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
      
      <div className="division-header-banner">
        <div className="title-bar">League New Division</div>
      </div>

      <main className="division-content">
        <div className="division-form-container">
          <h1 className="section-title">Division Information</h1>
          
          <form className="division-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="division-name">Division Name</label>
              <input 
                type="text" 
                id="division-name" 
                className="form-input" 
                placeholder="Value"
                value={divisionName}
                onChange={(e) => setDivisionName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="division-gender">Division Gender</label>
              <select 
                id="division-gender" 
                className="form-input" 
                value={divisionGender}
                onChange={(e) => setDivisionGender(e.target.value)}
                required
              >
                <option value="">Value</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="min-roster-size">Min Roster Size</label>
              <select 
                id="min-roster-size" 
                className="form-input" 
                value={minRosterSize}
                onChange={(e) => setMinRosterSize(e.target.value)}
                required
              >
                <option value="">Value</option>
                {[...Array(20)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="allowed-roster-sizes">Allowed Roster Sizes</label>
              <div className="range-container">
                <input 
                  type="range" 
                  id="allowed-roster-sizes" 
                  min="0" 
                  max="100" 
                  value={allowedRosterSize}
                  onChange={(e) => setAllowedRosterSize(e.target.value)}
                  className="range-input"
                />
                <div className="range-value">$0-{allowedRosterSize}</div>
                <div className="description">Description</div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="allowed-number-teams">Allowed Number of Teams</label>
              <div className="range-container">
                <input 
                  type="range" 
                  id="allowed-number-teams" 
                  min="0" 
                  max="100" 
                  value={allowedNumberOfTeams}
                  onChange={(e) => setAllowedNumberOfTeams(e.target.value)}
                  className="range-input"
                />
                <div className="range-value">$0-{allowedNumberOfTeams}</div>
                <div className="description">Description</div>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="publish-button">
                Publish Division
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateDivision;