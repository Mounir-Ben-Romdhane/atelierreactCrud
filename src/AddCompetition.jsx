import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import competitions from './api/competitions.json'; // Assuming you're importing your list of competitions

function AddCompetition() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    fees: '',
    date: '',
    participants: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new competition object from the form data
    const newCompetition = {
      id: competitions.length + 1, // Generate a unique ID (assuming IDs are sequential)
      ...formData
    };
    // Add the new competition to the competitions list
    competitions.push(newCompetition);
    // Redirect to the events page
    navigate('/events');
  };

  return (
    <div>
      <h1>Add Competition</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter competition name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formFees">
          <Form.Label>Fees</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter competition fees" 
            name="fees" 
            value={formData.fees} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formParticipants">
          <Form.Label>Participants</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter number of participants" 
            name="participants" 
            value={formData.participants} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Enter competition description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddCompetition;
