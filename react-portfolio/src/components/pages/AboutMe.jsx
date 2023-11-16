import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import profilePic from '../../assets/images/profile-pic.jpg';
import catPeek from '../../assets/images/cat-peek-1.png';



function AboutMe() {
    return (
        <main className="container-fluid vh-100 vw-100 d-flex align-items-center mt-3 mt-md-0">
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-lg-10">
                    <Card className='about-me'>
                        <img src={catPeek} alt="cat peeking" className="cat-peek" />
                        <Row className='folder'>
                            <Col xs={6} sm={4} md={3} lg={3}>
                                <Card.Header className='cstm-card-header'>
                                    who i am!
                                </Card.Header>
                            </Col>
                            <Col xs={12}>
                                <Card.Body className='cstm-card-body'>
                                    <Row className="flex-column flex-md-row px-4">
                                        <Col xs={12} md={3} lg={2} className="d-flex justify-content-center">
                                            <img src={profilePic} alt="a person. they look like they hate being photographed!" className="profile-pic" />
                                        </Col>
                                        <Col xs={12} md={8} lg={10} className='text-field' >
                                            <p className='about-me-text'>
                                                Hello! My name is Zel. I am just entering the world of web development. I am currently on track to graduate the Full Stack Web Development Bootcamp from UNH in mid december! Here's a bunch of text blah blah blah. Gotta write more stuff. Wow. Look at all these things. Could I have used lorem ipsum here? Yeah. Did I feel like finding the generator? No. So here is some stuff.
                                            </p>
                                            <p className='about-me-text'>
                                                Stream of conciousness right onto the page. I wonder how many times a year I think about the Clone Wars. It's gotta be at least two or three times a week. Is this my Roman Empire? It's just. The characters. They're all so lovable. Plo Koon? Plo's Bro's? So wholesome. Fuck the emperor that guy was such a jerk, RIP to my homie Plo Koon.
                                            </p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Col>

                        </Row>
                    </Card>
                </div>
            </div>
        </main>
    );
}

export default AboutMe;