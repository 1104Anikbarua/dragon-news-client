import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './RightNavigation.css';
import swiming from '../../assets/qZone1.png';
import classimg from '../../assets/qZone2.png';
import playground from '../../assets/qZone3.png';
import bgimg from '../../assets/bg.png'

const RightNavigation = () => {
    return (
        <div>
            <p className='fw-bolder'>Login With</p>
            <div className='d-flex flex-column mb-3'>
                <Button className='text-primary mb-2 btn' variant='outline-primary'>
                    <FcGoogle className='me-1 google-icon'></FcGoogle>
                    Login With Google
                </Button>
                <Button className='text-dark mb-2 btn' variant='outline-dark'>
                    <AiFillGithub className='me-2 google-icon'></AiFillGithub>
                    Login With Github
                </Button>
            </div>
            <ListGroup className='mb-3'>
                <p className='fw-bolder'>Find Us On</p>
                <ListGroup.Item className='text-secondary fw-bold'>
                    <FaFacebook className='icon bg-light me-2 text-primary'></FaFacebook>
                    facebook
                </ListGroup.Item>
                <ListGroup.Item className='text-secondary fw-bold'>
                    <FaTwitter className='icon bg-light me-2 text-primary'></FaTwitter>
                    Twitter
                </ListGroup.Item>
                <ListGroup.Item className='text-secondary fw-bold'>
                    <FaInstagram className='icon bg-light me-2 text-primary'></FaInstagram>
                    Instagram
                </ListGroup.Item>
            </ListGroup>
            <div className='bg-light mb-3'>
                <p className='fw-bolder p-2'>Q-Zone</p>
                <div className='text-center'>
                    <img className='mb-4' src={swiming} alt="kids zone image" />
                    <img className='mb-4' src={classimg} alt="kids zone image" />
                    <img className='mb-4' src={playground} alt="kids zone image" />
                </div>
            </div>

            <div className='position-relative'>
                <img className='bg-image' src={bgimg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-white text-center'>
                    <h1 className='text-white'>Create an Amazing Newspaper</h1>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant='danger'>Learn More</Button>
                </div>
            </div>

        </div>
    );
};

export default RightNavigation;