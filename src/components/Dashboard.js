import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-section">
        <Link to="/medical-history">
          <h3>Medical History</h3>
        </Link>
      </div>
      <div className="dashboard-section">
        <Link to="/fitness-metric">
          <h3>Fitness Metrics</h3>
        </Link>
      </div>
      <div className="dashboard-section">
        <Link to="/diet">
          <h3>Diet</h3>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
