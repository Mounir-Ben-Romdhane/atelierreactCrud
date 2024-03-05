import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getallEvents, editEvent } from '../service/api';

function EditEvent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [eventData, setEventData] = useState({
        name: '',
        price: '',
        nbTickets: '',
        nbParticipants: ''
    });

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await getallEvents(id);
                setEventData(response.data);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };
        fetchEventData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editEvent(id, eventData);
            // Redirect to events page after successful update
            navigate('/events');
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    return (
        <div>
            <h2>Edit Event</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={eventData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" value={eventData.price} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formNbTickets">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control type="number" name="nbTickets" value={eventData.nbTickets} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formNbParticipants">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control type="number" name="nbParticipants" value={eventData.nbParticipants} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Event
                </Button>
            </Form>
        </div>
    );
}

export default EditEvent;
