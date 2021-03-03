import React from 'react';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='logo'>News420</h1>
                <p style={{color:'dimgray'}}><em>Welcome</em></p>
            </div>
            <div>
                <Navbar bg="dark" variant="dark" className='container'>
                    <Navbar.Brand href="#home">News420</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#bangladesh">Bangladesh</Nav.Link>
                        <Nav.Link href="#international">International</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#game">Game</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;