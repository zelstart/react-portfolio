import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card className='project-card' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Card.Img variant="top" src={project.image} alt={project.name} className={`project-img ${isHovered ? 'darken' : ''}`} />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <Card.Title className='project-title'>{project.name}</Card.Title>
                <div className="project-description-container">
                    <Card.Text className="project-description">
                        {project.description}
                    </Card.Text>
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="project-link">github repo &gt;</a>
                    {project.liveWebsite && <a href={project.liveWebsite} target="_blank" rel="noopener noreferrer" className="project-link">live site &gt;</a>}
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard;