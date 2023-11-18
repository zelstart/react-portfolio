import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import * as EmailValidator from 'email-validator';
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

        console.log(formData);
        alert('Email has been sent - thank you!');
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={8}>
                    <Card className='contact-card'>
                        <Card.Header className='contact-card-header'>
                            <h5>get in touch with me!</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleFormSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
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
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
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
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Message</Form.Label>
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