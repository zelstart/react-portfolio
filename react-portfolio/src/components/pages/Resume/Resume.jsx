import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { skills } from '../../../assets/data/data';
import './Resume.css';
import '../../../style.css';

function Resume() {
    // filter skills based on classification
    const frontendSkills = skills.filter(skill => skill.classification === 'frontend' || skill.classification === 'both');
    const backendSkills = skills.filter(skill => skill.classification === 'backend' || skill.classification === 'both');

    return (
        <Container fluid>
            <Row className="justify-content-center px-2 resume">
                <Col className='' lg={10}>
                    <h2>resume &gt;</h2>
                </Col>
            </Row>

            <Row className="justify-content-center proficiencies px-2">
                <Col className='' lg={5} md={10}>
                    <h3>front end proficiencies</h3>
                    <ul className='skills-list'>
                        {frontendSkills.map((skill, index) => (
                            <li key={index}>{skill.name}</li>
                        ))}
                    </ul>
                </Col>
                <Col className='' lg={5} md={10}>
                    <h3>back end proficiencies</h3>
                    <ul className='skills-list'>
                        {backendSkills.map((skill, index) => (
                            <li key={index}>{skill.name}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;