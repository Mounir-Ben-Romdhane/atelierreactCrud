import React, { useEffect, useState } from 'react';
import { getallEvents } from './service/api';
import { useParams } from 'react-router-dom';

function Events() {
    const { id } = useParams();
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsA = await getallEvents(id);
                setEvents(eventsA.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        fetchEvents();
    }, [id]);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div>
            {events.map((event, index) => (
                <div key={index} onClick={() => handleEventClick(event)}>
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
                </div>
            ))}
            {selectedEvent && (
                <div>
                    <h2>{selectedEvent.name}</h2>
                    <p>{selectedEvent.description}</p>
                </div>
            )}
        </div>
    );
}

export default Events;
