import React from 'react';
import { Card, Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import './AboutMe.css';
import '../../../style.css';
import profilePic from '../../../assets/images/profile-pic.jpg';
import Skills from '../../Skills/Skills'; 


function AboutMe() {
    return (
        <Container fluid>
        <Row className="justify-content-center overflow-x-hidden">
            <Col className="image-container" lg={2}>
                <img src={profilePic} alt="Profile" className="profile-pic drop-image" />
            </Col>
            <Col className='' lg={7}>
            <Tabs defaultActiveKey="who i am" id="">
                <Tab eventKey="who-i-am" title="who i am">
                    <p className='about-me-text'>Hey! My name is Zel, and I'm fairly new to the web development scene. I am on track to graduate from UNH's Full Stack Web Development bootcamp in December. I have always liked tinkering with HTML and CSS on sites like MySpace, Tumblr and Proboards, but in May of 2023, I decided I wanted to completely change my career path and have spent the last few months learning a lot of different skills to help me break into this field. </p>
                </Tab>
                <Tab className='' eventKey="skills" title="what i can do">
                    <Skills /> 
                </Tab>
                <Tab className='' eventKey="goals" title="what i want to do">
                    <p className='about-me-text'> </p>
                </Tab>
            </Tabs>
            </Col>
        </Row>
        </Container>
    );
}

export default AboutMe;