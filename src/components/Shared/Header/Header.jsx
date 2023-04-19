import React from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="logo" />
                <p className='text-secondary fs-5'>Journalism Without Fear or Favor</p>
                <p className='fw-medium fs-5'>{moment().format("dddd,")} <small className='text-secondary fs-5'>{moment().format("MMMM D, YYYY")}</small></p>
            </div>
            <div className='bg-light d-flex'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={60} gradientWidth={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;