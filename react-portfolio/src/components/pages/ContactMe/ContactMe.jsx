import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import * as EmailValidator from 'email-validator';
import validator from 'email-validator';
import './ContactMe.css';
import '../../../style.css';

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const { name, email, message } = formData;
    
        if (!name || !message) {
            alert('Name and message fields cannot be blank.');
            return;
        }
    
        if (!EmailValidator.validate(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();  
        })
        .then(data => {
            if (data) {
                const jsonData = JSON.parse(data);
                alert('Your message has been sent! I will be in touch soon.');
            } else {
                alert('Your message has been sent! I will be in touch soon.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={5}>
                    <Card className='contact-card '>
                        <Card.Header className='contact-card-header'>
                            <h5>get in touch with me!</h5>
                        </Card.Header>
                        <Card.Body className='contact-card-body'>
                            <Form onSubmit={handleFormSubmit}>
                                <Row>
                                    <Col className='text-field'>
                                        <Form.Group>
                                            <Form.Label className='custom-label'>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='text-field'>
                                        <Form.Group>
                                            <Form.Label className='custom-label'>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='text-field'>
                                        <Form.Group>
                                            <Form.Label className='custom-label'>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <Button type="submit" className='message-submit'>Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
    );
}

export default ContactMe;