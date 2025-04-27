import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './UserHome.css';

function UserHome() {
  const [openDivision, setOpenDivision] = useState(null);
  const navigate = useNavigate(); 

  const toggleDivision = (divisionIndex) => {
    setOpenDivision(openDivision === divisionIndex ? null : divisionIndex);
  };

  const handleNavigateToCreateTeam = () => {
    navigate('/student-create-team');
  };

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

      <main className="user-content">
        <div className="leagues-container">
          <div className="league-title">Leagues</div>

          <div className="leagues-list">
            {/* Soccer League */}
            <div className="league-item">
              <div className="league-info">
                <h3 className="league-name">Soccer League 2025</h3>
                <p className="league-details">Teams: 8 | Waitlist Capacity: 5/20</p>
              </div>
              
              <div className="divisions">
                <div className="division" onClick={() => toggleDivision(1)}>
                  <span className="division-title">Men's Division</span>
                  <span className={`arrow ${openDivision === 1 ? 'open' : ''}`}>▼</span>
                </div>
                {openDivision === 1 && (
                  <div className="division-options">
                    <button className="join-button" onClick={handleNavigateToCreateTeam}>Join Men's Team</button>
                    <button className="create-button" onClick={handleNavigateToCreateTeam}>Create Men's Team</button>
                  </div>
                )}
                <p className="league-details">Teams: 9 | Waitlist Capacity: 9/20</p>
                <div className="division" onClick={() => toggleDivision(2)}>
                  <span className="division-title">Women's Division</span>
                  <span className={`arrow ${openDivision === 2 ? 'open' : ''}`}>▼</span>
                </div>
                {openDivision === 2 && (
                  <div className="division-options">
                    <button className="join-button" onClick={handleNavigateToCreateTeam}>Join Women's Team</button>
                    <button className="create-button" onClick={handleNavigateToCreateTeam}>Create Women's Team</button>
                  </div>
                )}
              </div>
            </div>

            {/* Basketball League */}
            <div className="league-item">
              <div className="league-info">
                <h3 className="league-name">Basketball League 2025</h3>
                <p className="league-details">Teams: 10 | Waitlist Capacity: 3/23</p>
              </div>

              <div className="divisions">
                <div className="division" onClick={() => toggleDivision(3)}>
                  <span className="division-title">Men's Division</span>
                  <span className={`arrow ${openDivision === 3 ? 'open' : ''}`}>▼</span>
                </div>
                {openDivision === 3 && (
                  <div className="division-options">
                    <button className="join-button" onClick={handleNavigateToCreateTeam}>Join Men's Team</button>
                    <button className="create-button" onClick={handleNavigateToCreateTeam}>Create Men's Team</button>
                  </div>
                )}
                <p className="league-details">Teams: 9 | Waitlist Capacity: 8/20</p>
                <div className="division" onClick={() => toggleDivision(4)}>
                  <span className="division-title">Women's Division</span>
                  <span className={`arrow ${openDivision === 4 ? 'open' : ''}`}>▼</span>
                </div>
                {openDivision === 4 && (
                  <div className="division-options">
                    <button className="join-button" onClick={handleNavigateToCreateTeam}>Join Women's Team</button>
                    <button className="create-button" onClick={handleNavigateToCreateTeam}>Create Women's Team</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="help-button">
        <span className="question-mark">?</span>
      </div>
    </div>
  );
}

export default UserHome;
