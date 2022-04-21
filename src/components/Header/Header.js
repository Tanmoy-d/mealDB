import React from 'react';
import { Container, Form, FormControl, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand> <Link to='/'>FOOD APP</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/restaurant'>Restaurant</Link></Nav.Link>
                        <Nav.Link > <Link to='/features'>Features</Link></Nav.Link>
                        <Nav.Link> <Link to='/pricing'> Pricing</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;