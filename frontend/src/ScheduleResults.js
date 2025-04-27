import React, { useState } from 'react';
import './ScheduleResults.css';

function ScheduleResults({ onNavigateHome }) {
  // Sample match data - in a real app, this would likely come from an API or props
  const [matches, setMatches] = useState([
    {
      id: 1,
      team1: "Team 1",
      team2: "Team 2",
      score1: 0,
      score2: 1
    },
    {
      id: 2,
      team1: "Team 3",
      team2: "Team 4",
      score1: 2,
      score2: 1
    }
  ]);

  // Function to update scores (for potential future edit functionality)
  const handleScoreUpdate = (matchId, team, newScore) => {
    setMatches(matches.map(match => {
      if (match.id === matchId) {
        if (team === 1) {
          return { ...match, score1: newScore };
        } else {
          return { ...match, score2: newScore };
        }
      }
      return match;
    }));
  };

  return (
    <div className="schedule-page">
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
      
      <div className="schedule-header-banner">
        <div className="title-bar">Schedule/Results</div>
      </div>

      <main className="schedule-content">
        <h1 className="page-title">Schedule and Results</h1>
        
        <div className="matches-container">
          {matches.map(match => (
            <div key={match.id} className="match-card">
              <h2 className="match-title">Match #{match.id}</h2>
              
              <div className="match-content">
                <div className="team-section">
                  <div className="team-name">{match.team1}</div>
                  <div className="team-score">{match.score1}</div>
                </div>
                
                <div className="team-section">
                  <div className="team-name">{match.team2}</div>
                  <div className="team-score">{match.score2}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ScheduleResults;