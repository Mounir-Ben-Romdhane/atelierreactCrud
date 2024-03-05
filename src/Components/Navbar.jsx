import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Events App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                    <Nav.Link as={Link} to="/add-event">Add new Event</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
