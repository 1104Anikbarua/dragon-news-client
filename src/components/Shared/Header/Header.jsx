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
                <Marquee className='text-danger' speed={60} gradientWidth={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;