import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard({ project }) {
    return (
        <Card className='project-card'>
            <Card.Img variant="top" src={project.image} alt={project.name} className='project-img' />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">github repo &gt;</a>
                {project.liveWebsite && <a href={project.liveWebsite} target="_blank" rel="noopener noreferrer">live site &gt;</a>}
            </div>
        </Card>
    )
}

export default ProjectCard;