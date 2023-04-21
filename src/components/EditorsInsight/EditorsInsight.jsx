import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import imageOne from '../../assets/editorsInsight1.png';
import imageTwo from '../../assets/editorsInsight2.png';
import imageThree from '../../assets/editorsInsight3.png';
import moment from 'moment';
import { HiOutlineCalendar } from 'react-icons/hi2';

const EditorsInsight = () => {
    return (
        <>
            <p className='fw-bolder'>Editors Insight</p>
            <Row sm={1} md={2} lg={3}>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imageOne} />
                        <Card.Body>
                            <Card.Title>
                                21 The Most Stylish Wedding Guest Dresses For Spring
                            </Card.Title>
                            <Card.Text className='flex align-items-center text-secondary'>
                                <HiOutlineCalendar className='me-1 fs-5'></HiOutlineCalendar>
                                {moment().format("MMM D,YYYY")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imageTwo} />
                        <Card.Body>
                            <Card.Title>
                                21 The Most Stylish Wedding Guest Dresses For Spring
                            </Card.Title>
                            <Card.Text className='flex align-items-center text-secondary'>
                                <HiOutlineCalendar className='me-1 fs-5'></HiOutlineCalendar>
                                {moment().format("MMM D,YYYY")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imageThree} />
                        <Card.Body>
                            <Card.Title>
                                21 The Most Stylish Wedding Guest Dresses For Spring
                            </Card.Title>
                            <Card.Text className='flex align-items-center text-secondary'>
                                <HiOutlineCalendar className='me-1 fs-5'></HiOutlineCalendar>
                                {moment().format("MMM D,YYYY")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </>

    );
};

export default EditorsInsight;