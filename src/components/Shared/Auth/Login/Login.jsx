import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form className='w-25 mx-auto'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bolder'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept Terms & Conditions" />
            </Form.Group>
            <input className='w-100 input-bg' type="submit" value="Login" />
            <Form.Text>
                Don't have an account Please<Link className='text-decoration-none' to={'/register'}> Register</Link>
            </Form.Text>
        </Form>
    );
};

export default Login;