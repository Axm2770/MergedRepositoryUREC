import React, { useState } from 'react';
import './AdminHome.css';
import CreateLeague from './CreateLeague';
import CreateTournament from './CreateTournament';
import QuickBracketCreator from './QuickBracketCreator';
import ScheduleResults from './ScheduleResults';
import ViewUpdateArchive from './ViewUpdateArchive';

function AdminHome({ onNavigateHome }) {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'createLeague') {
    return <CreateLeague onNavigateHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'createTournament') {
    return <CreateTournament onNavigateHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'quickBracket') {
    return <QuickBracketCreator onNavigateHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'scheduleResults') {
    return <ScheduleResults onNavigateHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'viewArchive') {
    return <ViewUpdateArchive onNavigateHome={() => setCurrentView('home')} />;
  }

  return (
    <div className="admin-page">
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
      
      <div className="admin-header-banner">
        <div className="title-bar">Administrator Home Page</div>
      </div>

      <main className="admin-content">
        <div className="admin-option">
          <button 
            className="admin-button"
            onClick={() => setCurrentView('createLeague')}
          >
            Create New League
          </button>
        </div>
        <div className="admin-option">
          <button 
            className="admin-button" 
            onClick={() => setCurrentView('createTournament')}
          >
            Create New Tournament
          </button>
        </div>
        <div className="admin-option">
          <button 
            className="admin-button"
            onClick={() => setCurrentView('quickBracket')}
          >
            Quick Bracket Creator
          </button>
        </div>
        <div className="admin-option">
          <button 
            className="admin-button"
            onClick={() => setCurrentView('scheduleResults')}
          >
            Schedule/Results
          </button>
        </div>
        <div className="admin-option">
          <button 
            className="admin-button"
            onClick={() => setCurrentView('viewArchive')}
          >
            View/Update Archive
          </button>
        </div>
      </main>
      
      <div className="help-button">
        <span className="question-mark">?</span>
      </div>
    </div>
  );
}

export default AdminHome;