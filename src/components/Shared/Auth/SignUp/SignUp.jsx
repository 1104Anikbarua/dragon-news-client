import React from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { NewsContext } from '../../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState('')
    const [checked, setChecked] = useState(false)
    const { signUpUser, updateUserProfile, verifyEmail } = useContext(NewsContext);
    // console.log(signUpUser)
    // console.log(checked)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const phtoUrl = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password)

        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                updateUserProfile(name, phtoUrl)
                    .then(() => {
                        toast.success(`Successfully add ${name} as user Name`)
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        setError(errorMessage)
                    })
                verifyEmail()
                    .then(() => {
                        toast.info('pleaser verify your email address')
                    })
                    .catch(() => {
                        toast.error('something went wrong')
                    })
                if (user.emailVerified) {
                    navigate(from, { replace: true })

                    toast.success(`${name} Email is successfully created`)
                }
                else {
                    toast.info(`${user.displayName} please verify your email!`)
                }

            })
            .catch((error) => {
                const errorMessage = error.code;
                console.log(errorMessage)
                setError(errorMessage)
            })
        event.target.reset();
    }
    // const handleChecked = (event) => {
    //     setChecked(event.target.checked)
    // }

    return (
        <Form onSubmit={handleSignUp} className='w-25 mx-auto'>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='fw-bolder'>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" name='name' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label className='fw-bolder'>Photo URL</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" name='photo' />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bolder'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required />

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={
                    <>
                        <Link to={'/terms'} className='text-decoration-none'>Accept Terms and Conditions</Link>
                    </>}
                    // onClick={handleChecked}
                    onChange={() => setChecked(!checked)}
                />
            </Form.Group>

            <input disabled={checked ? false : true} className='w-100 input-bg' type="submit" value="Sign up" />
            <Form.Text className='fw-normal fs-6'>
                Already have an account Please<Link className='text-decoration-none' to={'/login'}> Login</Link>
            </Form.Text>
        </Form>
    );
};

export default SignUp;