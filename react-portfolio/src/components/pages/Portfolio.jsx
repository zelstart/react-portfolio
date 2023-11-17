import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import { projectData } from '../../assets/data/data';

function Portfolio() {
    return (
        <Row className="row vw-100 justify-content-center p-5">
            {projectData.map((project, index) => (
                <Col md={4} key={index}>
                    <ProjectCard project={project} />
                </Col>
            ))}
        </Row>
    )
}

export default Portfolio;