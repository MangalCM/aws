import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [formData, setFormData] = useState({
    waterIntake: '',
    calories: '',
    sleep: ''
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Fitness details submitted!');
  };

  return (
    <div className="home">
      <h2>Welcome to PHTracker!</h2>
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="calendar"
      />
      
      <form onSubmit={handleSubmit} className="fitness-form">
        <Container>
          <Row>
            <Col>
              <label>Water Intake (liters):</label>
              <input
                type="number"
                name="waterIntake"
                value={formData.waterIntake}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <label>Calories Consumed:</label>
              <input
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <label>Sleep (hours):</label>
              <input
                type="number"
                name="sleep"
                value={formData.sleep}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Container>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
