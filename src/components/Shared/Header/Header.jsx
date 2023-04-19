import React from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import user from '../../../assets/user.png'
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
                <Marquee className='text-danger' speed={60} gradientWidth={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
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

export default Header;