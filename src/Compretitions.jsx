import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import competetionss from './api/competitions.json';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Competition from './Competetion';

function Competitions() {

    const [competitions, setCompetitions] = useState([]);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        setCompetitions(competetionss); 
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 3000);

        // Clear timer on component unmount
        return () => clearTimeout(timer);
    }, []); 

    return (
        <div>
            {showWelcomeMessage && (
                <Alert variant="success">Welcome to the competition page!</Alert>
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Fees</th>
                        <th>Date</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {competitions.map((competition, index) => (
                        <Competition 
                            key={competition.id}
                            id={competition.id}
                            name={competition.name}
                            fees={competition.fees}
                            date={competition.date}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Competitions;
