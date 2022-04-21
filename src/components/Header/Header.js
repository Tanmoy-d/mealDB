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
                    <Nav className="me-auto" defaultActiveKey="/" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/restaurant">Restaurant</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/features">Features</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/pricing ">Pricing</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;



