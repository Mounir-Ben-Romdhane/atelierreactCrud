import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    const navLinkStyle = {
        textDecoration: 'none',
        padding: '10px',
        borderBottom: '2px solid transparent', // Initially transparent
    };

    const activeStyle = {
        borderBottom: '2px solid black', // Change color or style as needed
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/home" style={navLinkStyle} activeStyle={activeStyle}>Home</NavLink>
                    <NavLink to="/competition" style={navLinkStyle} activeStyle={activeStyle}>Competition</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
