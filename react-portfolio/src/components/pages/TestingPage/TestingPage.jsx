import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './TestingPage.css';
import '../../../style.css';

function TestingPage() {
    return (
        <Container fluid>
            <Row className="testing-page justify-content-center">
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h5>Testing Page</h5>
                        </Card.Header>

                        <Card.Body>
                            <p>
                                This is a testing page.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TestingPage;