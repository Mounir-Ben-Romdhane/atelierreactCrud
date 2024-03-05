/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Event from './Event';
import eventss from '../api/events.json';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { getallEvents } from '../service/api';
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, selectEvent } from "../Redux/slices/eventsSlice.jsx"; // Make sure the path is correct


function Events() {
    //const [events, setEvents] = useState([]);
    const [bookedEvents, setBookedEvents] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events); // Adjust according to your state structure


    useEffect(() => {
        dispatch(fetchEvents());
        // Hide welcome message after 3 seconds
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 3000);
    }, [dispatch]);

    /*
    useEffect(() => {
        //setEvents(eventss);

        const fetchEvents = async () => {
            try {
                const eventsA = await getallEvents();
                setEvents(eventsA.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        fetchEvents();
         // Hide welcome message after 3 seconds
         const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 3000);

        console.log('aeoiugfeg');
        // Clear timer on component unmount
        return () => clearTimeout(timer);
    }, []); 

    const buy = (index) => {
        const updatedEvents = [...events];
        updatedEvents[index].nbTickets--;
        updatedEvents[index].nbParticipants++;
        setEvents(updatedEvents);
        setBookedEvents([...bookedEvents, index]);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };*/

    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {showWelcomeMessage && (
                <Alert variant="success">Welcome to the Events page!</Alert>
            )}
            {events.map((item, index) => (
                <div key={index} style={{ margin: '10px' }}>
                    <Event
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        nbTickets={item.nbTickets}
                        nbParticipants={item.nbParticipants}
                    />
                    {item.nbTickets > 0 ? (
                        <Button onClick={() => buy(index)} disabled={bookedEvents.includes(index)}>Book an event</Button>
                    ) : (
                        <Button disabled>Sold Out</Button>
                    )}
                </div>
            ))}
            <Alert variant="success" show={showAlert}>You have booked an event</Alert>
        </Container>
    );
}

export default Events;
