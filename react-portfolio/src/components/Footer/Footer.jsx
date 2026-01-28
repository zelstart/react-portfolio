import React from 'react';
import './Footer.css';
import '../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href='https://github.com/zelstart' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='my-icons' /></a>
                        <a href='https://www.linkedin.com/in/elisabeth-start-pomeroy-21b85b240/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='my-icons' /></a>
                        <a href='https://stackoverflow.com/users/19686794/zel' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} className='my-icons' /></a>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h4>©2023 created by zel start.</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
