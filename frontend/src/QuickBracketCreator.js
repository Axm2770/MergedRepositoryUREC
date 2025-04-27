import React, { useState } from 'react';
import './QuickBracketCreator.css';

function QuickBracketCreator({ onNavigateHome }) {
  const [tournamentStyle, setTournamentStyle] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleAddParticipant = () => {
    if (participantName.trim()) {
      setParticipants([...participants, participantName.trim()]);
      setParticipantName(''); // Clear input after adding
    }
  };

  const handleCreateBracket = () => {
    // Handle bracket creation logic here
    console.log({
      tournamentStyle,
      participants
    });
    
    // In a real app, you would generate and display the bracket
    // For now, we'll just log the data and return to home
    onNavigateHome();
  };

  return (
    <div className="bracket-page">
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
      
      <div className="bracket-header-banner">
        <div className="title-bar">Quick Bracket Creator</div>
      </div>

      <main className="bracket-content">
        <div className="form-group">
          <label htmlFor="tournament-style">Tournament Style</label>
          <select 
            id="tournament-style" 
            className="form-input" 
            value={tournamentStyle}
            onChange={(e) => setTournamentStyle(e.target.value)}
          >
            <option value="">Value</option>
            <option value="single-elimination">Single Elimination</option>
            <option value="double-elimination">Double Elimination</option>
            <option value="round-robin">Round Robin</option>
            <option value="swiss">Swiss</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="participant-name">Participant Name</label>
          <input 
            type="text" 
            id="participant-name" 
            className="form-input" 
            placeholder="Value"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
        </div>

        {participants.length > 0 && (
          <div className="participants-list">
            <h3>Added Participants:</h3>
            <ul>
              {participants.map((participant, index) => (
                <li key={index}>{participant}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="bracket-actions">
          <button 
            className="bracket-button add-button" 
            onClick={handleAddParticipant}
          >
            Add Participant
          </button>
          
          <button 
            className="bracket-button create-button" 
            onClick={handleCreateBracket}
            disabled={participants.length < 2 || !tournamentStyle}
          >
            Create Bracket
          </button>
        </div>
      </main>
      
      <div className="help-button">
        <span className="question-mark">?</span>
      </div>
    </div>
  );
}

export default QuickBracketCreator;