import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import userImg from '../../../assets/user.png'
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { useContext } from 'react';
import { NewsContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';


const NavigationBar = () => {
    const { user, logOutUser } = useContext(NewsContext);


    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('Logout Successful')
            })
            .catch((error) => {
                const errorMessage = error.code;
            })
    }




    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="position-absolute top-50 start-50 translate-middle">
                            <li className='me-5'><Link to="/" className='text-decoration-none'>Home</Link></li>
                            <li className='me-5'><Link to="/about" className='text-decoration-none'>About</Link></li>
                            <li className=''><Link to="/news" className='text-decoration-none'>News</Link></li>


                        </Nav>
                        <Nav className='ms-auto'>
                            <Link to='/'>
                                <img src={userImg} alt="" />
                            </Link>
                            {
                                user
                                    ?
                                    <Link onClick={() => handleLogOut()} className='ms-2' eventkey={2} to='/login'>
                                        <Button variant='secondary' className='nav-btn'>Logout</Button>
                                    </Link>
                                    :
                                    <Link className='ms-2' eventkey={2} to='/login'>
                                        <Button variant='secondary' className='nav-btn'>Login</Button>
                                    </Link>

                            }
                            {
                                !user && <Link className='ms-2' eventkey={2} to='/register'>
                                    <Button variant='secondary' className='nav-btn'>Register</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;