import React from 'react';
import Header from '../Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import RightNavigation from '../RightNavigation/RightNavigation';

const News = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNavigation></RightNavigation>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default News;