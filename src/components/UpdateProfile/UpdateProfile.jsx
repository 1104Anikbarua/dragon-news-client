import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NewsContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import { useRef } from 'react';

const UpdateProfile = () => {
    const { user } = useContext(NewsContext);
    const [name, setName] = useState(user?.displayName)

    const photoRef = useRef(user?.photoURL)

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        console.log(name)
        console.log(photoRef.current.value)
    }

    const handleUpdateName = (event) => {
        setName(event.target.value)
    }


    return (
        <Form onSubmit={handleUpdateProfile} className='w-25 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control defaultValue={user?.email} readOnly disabled type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>

                <Form.Control
                    onChange={handleUpdateName}
                    defaultValue={name}
                    type="text"
                    placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control
                    ref={photoRef}
                    defaultValue={user?.photoURL}
                    type="text"
                    placeholder="Photo url" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UpdateProfile;