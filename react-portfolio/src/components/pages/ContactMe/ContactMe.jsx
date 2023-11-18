import React, { useState } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
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

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!EmailValidator.validate(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        console.log(formData);
    };

    return (
        
            <div className="row vw-100 justify-content-center">
                <div className="col-12 col-lg-10">
                <Card className='contact-card'>
                    <Card.Header className='contact-card-header'>
                        <h5>get in touch with me!</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleFormSubmit}>
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={3}>
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
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button type="submit" className='message-submit'>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
}

export default ContactMe;