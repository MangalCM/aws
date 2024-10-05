import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';  // Assuming this will have the styles for the sliding panel

function Profile() {
  const [sidePanelVisible, setSidePanelVisible] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelVisible(!sidePanelVisible);
  };

  return (
    <div className="profile">
      <button className="profile-btn" onClick={toggleSidePanel}>Profile</button>
      
      <div className={`side-panel ${sidePanelVisible ? 'visible' : ''}`}>
        <button className="close-btn" onClick={toggleSidePanel}>X</button>
        <ul>
          <li><Link to="/profile">My Account</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
