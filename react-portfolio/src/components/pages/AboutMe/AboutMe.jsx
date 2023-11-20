import React from 'react';
import { Card, Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import './AboutMe.css';
import '../../../style.css';
import profilePic from '../../../assets/images/profile-pic.jpg';
import Skills from '../../Skills/Skills';
import Goals from '../../Goals/Goals';


function AboutMe() {
    return (
        <Container fluid>
            <Row className="justify-content-center overflow-x-hidden my-3">
                <Col className="image-container order-2 order-md-1 d-flex justify-content-center my-2" lg={2} md={4} sm={12}>
                    <img src={profilePic} alt="Profile" className="profile-pic drop-image" />
                </Col>
                <Col className='order-1 order-md-2' lg={7} md={7} sm={12}>
                    <Tabs defaultActiveKey="who-i-am" id="">

                        <Tab eventKey="who-i-am" title="who i am">
                            <p className='about-me-text'>Hey! My name is Zel, and I'm fairly new to the web development scene. I am on track to graduate from UNH's Full Stack Web Development bootcamp in December. I love to learn new skills, and I have always been interested in learning how to code. Right now my skills mostly lie in Web Dev, but I am interested in eventually learning skills related to programming video games or mobile games! </p>
                        </Tab>

                        <Tab className='' eventKey="skills" title="what i can do">
                            <Skills />
                        </Tab>

                        <Tab className='' eventKey="goals" title="what i want to do">
                            <Goals />
                        </Tab>

                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;