import React from 'react';
import { Card, Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import './AboutMe.css';
import '../../../style.css';
import profilePic from '../../../assets/images/profile-pic.jpg';
import Skills from '../../Skills/Skills';
import Goals from '../../Goals/Goals';

// TODO: Fix some of the jankiness at around 1250px width 
function AboutMe() {
    return (
        <Container fluid>
            <Row className="justify-content-center overflow-x-hidden my-3">
                <Col className="image-container order-2 order-lg-1 d-flex justify-content-center my-2" lg={2} md={12} sm={12}>
                    <img src={profilePic} alt="Profile" className="profile-pic drop-image" />
                </Col>
                <Col className='order-1 order-lg-2' lg={7} md={12} sm={12}>
                    <Tabs defaultActiveKey="who-i-am" id="">

                        <Tab eventKey="who-i-am" title="who i am">
                            <p className='about-me-text'>Hey! My name is Zel, and I have recently finished up the Full Stack Web Dev bootcamp program at UNH. I have a decent amount of experience with HTML & CSS, and wanted to expand on my skills to turn a hobby into a career. I love learning new skills, and am constantly trying to improve and challenge myself. I'm continuing to learn and grow my web dev skills on my own - currently I'm working on learning C#, .NET, and Python and am looking for opportunities to use these skills.  </p>
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