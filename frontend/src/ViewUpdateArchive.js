import React, { useState } from 'react';
import './ViewUpdateArchive.css';

function ViewUpdateArchive({ onNavigateHome }) {
  // Sample data for leagues and tournaments
  const [events, setEvents] = useState([
    { id: 1, type: 'league', name: 'Ongoing League #1', status: 'active' },
    { id: 2, type: 'league', name: 'Ongoing League #2', status: 'active' },
    { id: 3, type: 'tournament', name: 'Ongoing Tournament #1', status: 'active' },
    { id: 4, type: 'league', name: 'Past League #1', status: 'completed' },
    { id: 5, type: 'tournament', name: 'Past Tournament #1', status: 'completed' }
  ]);

  // Filter states
  const [showActive, setShowActive] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showLeagues, setShowLeagues] = useState(true);
  const [showTournaments, setShowTournaments] = useState(true);

  // Filter the events based on the current filter settings
  const filteredEvents = events.filter(event => {
    if (event.status === 'active' && !showActive) return false;
    if (event.status === 'completed' && !showCompleted) return false;
    if (event.type === 'league' && !showLeagues) return false;
    if (event.type === 'tournament' && !showTournaments) return false;
    return true;
  });

  // Handle navigating to result entry (placeholder function)
  const handleEnterResults = (eventId) => {
    console.log(`Navigate to enter results for event ${eventId}`);
    // This would navigate to a result entry page in a real application
  };

  return (
    <div className="archive-page">
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
      
      <div className="archive-header-banner">
        <div className="title-bar">View/Update Archive</div>
      </div>

      <main className="archive-content">
        <div className="archive-controls">
          <div className="filter-controls">
            <h3>Filter By:</h3>
            <div className="filter-options">
              <div className="filter-group">
                <label className="filter-label">
                  <input 
                    type="checkbox" 
                    checked={showActive} 
                    onChange={() => setShowActive(!showActive)}
                  />
                  Active Events
                </label>
                <label className="filter-label">
                  <input 
                    type="checkbox" 
                    checked={showCompleted} 
                    onChange={() => setShowCompleted(!showCompleted)}
                  />
                  Completed Events
                </label>
              </div>
              <div className="filter-group">
                <label className="filter-label">
                  <input 
                    type="checkbox" 
                    checked={showLeagues} 
                    onChange={() => setShowLeagues(!showLeagues)}
                  />
                  Leagues
                </label>
                <label className="filter-label">
                  <input 
                    type="checkbox" 
                    checked={showTournaments} 
                    onChange={() => setShowTournaments(!showTournaments)}
                  />
                  Tournaments
                </label>
              </div>
            </div>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search events..." 
              className="search-input"
            />
          </div>
        </div>

        <div className="events-list">
          {filteredEvents.length === 0 ? (
            <div className="no-events">No events match your selected filters</div>
          ) : (
            filteredEvents.map(event => (
              <div key={event.id} className={`event-card ${event.status}`}>
                <div className="event-info">
                  <h3 className="event-name">{event.name}</h3>
                  <div className="event-type">
                    {event.type === 'league' ? 'League' : 'Tournament'}
                  </div>
                  <div className={`event-status ${event.status}`}>
                    {event.status === 'active' ? 'Active' : 'Completed'}
                  </div>
                </div>
                <div className="event-actions">
                  <button 
                    className="event-button"
                    onClick={() => handleEnterResults(event.id)}
                  >
                    Enter Results
                  </button>
                  <button className="event-button">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      
      <div className="help-button">
        <span className="question-mark">?</span>
      </div>
    </div>
  );
}

export default ViewUpdateArchive;