import React, { useState } from 'react';

function Diet() {
  const [dietData, setDietData] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: ''
  });

  const handleChange = (e) => {
    setDietData({ ...dietData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Diet details submitted');
  };

  return (
    <div className="diet">
      <h2>Diet</h2>
      <form onSubmit={handleSubmit}>
        <label>Breakfast:</label>
        <input
          type="text"
          name="breakfast"
          value={dietData.breakfast}
          onChange={handleChange}
        />
        <label>Lunch:</label>
        <input
          type="text"
          name="lunch"
          value={dietData.lunch}
          onChange={handleChange}
        />
        <label>Dinner:</label>
        <input
          type="text"
          name="dinner"
          value={dietData.dinner}
          onChange={handleChange}
        />
        <label>Snacks:</label>
        <input
          type="text"
          name="snacks"
          value={dietData.snacks}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Diet;
