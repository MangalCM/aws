import React, { useState } from 'react';

function MedicalHistory() {
  const [formData, setFormData] = useState({
    medicalReport: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Medical history submitted');
  };

  return (
    <div className="medical-history">
      <h2>Medical History</h2>
      <form onSubmit={handleSubmit}>
        <label>Medical Report:</label>
        <input
          type="text"
          name="medicalReport"
          value={formData.medicalReport}
          onChange={handleChange}
        />
        <label>Additional Information:</label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MedicalHistory;
