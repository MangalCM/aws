import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import MedicalHistory from './components/MedicalHistory';
import Diet from './components/Diet';
import FitnessMetric from './components/FitnessMetric';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>PHTracker</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Profile /></li> {/* Profile button with side panel */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/fitness-metric" element={<FitnessMetric />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
    