import React from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { NewsContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [error, setError] = useState('')
    const { signUpUser } = useContext(NewsContext);
    console.log(signUpUser)

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)

        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.code;
                console.log(errorMessage)
                setError(errorMessage)
            })
        event.target.reset();
    }

    return (
        <Form onSubmit={handleSignUp} className='w-25 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='fw-bolder'>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" name='name' />

            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label className='fw-bolder'>Photo URL</Form.Label>
                <Form.Control type="file" placeholder="Enter Your Name" name='photo' />

            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bolder'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept Terms & Conditions" />
            </Form.Group>
            <input className='w-100 input-bg' type="submit" value="Sign up" />
            <Form.Text>
                Already have an account Please<Link className='text-decoration-none' to={'/login'}> Login</Link>
            </Form.Text>
        </Form>
    );
};

export default SignUp;