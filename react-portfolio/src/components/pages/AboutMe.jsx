import React from 'react';
import { Row, Col } from 'react-bootstrap';
import profilePic from '../../assets/images/profile-pic.jpg';
import catPeek from '../../assets/images/cat-peek-1.png';
{/* <img src={catPeek} alt="cat peeking" className="cat-peek" /> */ }

function AboutMe() {
    return (

        <Row className="about-me vw-100 justify-content-center my-3">

            <Col xs={4} sm={4} md={3} lg={2} className='cstm-tab'>
                who i am!
            </Col>
            <Col xs={7} sm={7} md={7} lg={8} className='test'></Col>


            <Col xs={11} sm={11} md={10} lg={10} className='cstm-body'>
                <Row>

                    <Col xs={12} sm={12} md={4} lg={3} className="d-flex justify-content-center my-1 order-1 order-md-0">
                        <img src={profilePic} alt="a person. they look like they hate being photographed and kinda wish this part was optional!" className="profile-pic" />
                    </Col>

                    <Col xs={12} sm={12} md={8} lg={9} className="order-0 order-md-1">
                        <div className='text-field'>
                            <p className='about-me-text'>
                                Hello! My name is Zel. I am just entering the world of web development. I am currently on track to graduate the Full Stack Web Development Bootcamp from UNH in mid december! Here's a bunch of text blah blah blah. Gotta write more stuff. Wow. Look at all these things. Could I have used lorem ipsum here? Yeah. Did I feel like finding the generator? No. So here is some stuff.
                            </p>
                            <p className='about-me-text'>
                                Stream of conciousness right onto the page. I wonder how many times a year I think about the Clone Wars. It's gotta be at least two or three times a week. Is this my Roman Empire? It's just. The characters. They're all so lovable. Plo Koon? Plo's Bro's? So wholesome. Fuck the emperor that guy was such a jerk, RIP to my homie Plo Koon.
                            </p>
                            <p className="about-me-text">
                                Wow! Still need to say more? Okay... Well. I have three cats and they're my lil babies. I love them. My oldest is named Riku and he's only got three legs! But he's such a lil trooper. Andi is second oldest and she is an absolute princess. The most well behaved cat I've ever met. Then there's Nyx. He's the youngest, anxious-est, and sweetest! He's very gentle and loving.
                            </p>
                        </div>
                    </Col>

                </Row>
            </Col>

        </Row>

    );
}

export default AboutMe;