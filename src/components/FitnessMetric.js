import React, { useState } from 'react';

function FitnessMetric() {
  const [fitnessData, setFitnessData] = useState({
    height: '',
    weight: '',
    bp: '',
    pulse: ''
  });

  const handleChange = (e) => {
    setFitnessData({ ...fitnessData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Fitness metrics submitted');
  };

  return (
    <div className="fitness-metric">
      <h2>Fitness Metric</h2>
      <form onSubmit={handleSubmit}>
        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={fitnessData.height}
          onChange={handleChange}
        />
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight"
          value={fitnessData.weight}
          onChange={handleChange}
        />
        <label>Blood Pressure (mmHg):</label>
        <input
          type="text"
          name="bp"
          value={fitnessData.bp}
          onChange={handleChange}
        />
        <label>Pulse (bpm):</label>
        <input
          type="number"
          name="pulse"
          value={fitnessData.pulse}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FitnessMetric;
