import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { projectData } from '../../../assets/data/data';
import './Portfolio.css';
import '../../../style.css';


function Portfolio() {
    return (
        <Row className="row justify-content-center py-1 px-5">
            {projectData.map((project, index) => (
                <Col className='project' md={6} lg={6} xl={4} key={index}>
                    <ProjectCard project={project} />
                </Col>
            ))}
        </Row>
    )
}

export default Portfolio;