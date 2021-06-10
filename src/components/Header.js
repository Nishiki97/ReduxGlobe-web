import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import logo from '../images/globe.png';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                ReduxGlobe
            </Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Button variant="outline-info">About Us</Button>
    
        </Navbar>
    );
};

export default Header;