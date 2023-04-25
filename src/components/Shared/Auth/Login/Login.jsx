import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { NewsContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const { logInUser } = useContext(NewsContext)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('Logged In Successful')
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.code;
                console.log(errorMessage)
                toast.error(errorMessage)
            })
        event.target.reset();
    }



    return (
        <Form onSubmit={handleLogin} className='w-25 mx-auto'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bolder'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />

            </Form.Group>

            <input className='w-100 input-bg' type="submit" value="Login" />
            <Form.Text>
                Don't have an account Please<Link className='text-decoration-none' to={'/register'}> Register</Link>
            </Form.Text>
        </Form>
    );
};

export default Login;