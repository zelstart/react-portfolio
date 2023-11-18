import React from 'react';
import { Badge } from 'react-bootstrap';
import { skills } from '../../assets/data/data';
import './Skills.css';

function Skills() {
    return (
        <div className='my-2'>
            {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="mr-2 skills">
                    {skill}
                </Badge>
            ))}
        </div>
    );
}

export default Skills; 