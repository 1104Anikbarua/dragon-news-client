import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavigation from '../LeftNavigation/LeftNavigation';
import RightNavigation from '../RightNavigation/RightNavigation';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNavigation></LeftNavigation>
                    </Col>

                    <Col lg={6}>
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

export default Main;