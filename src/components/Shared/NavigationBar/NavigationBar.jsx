import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import user from '../../../assets/user.png'

const NavigationBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#about">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#user">
                                <img src={user} alt="" />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#login">
                                <Button variant='secondary'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;