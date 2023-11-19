import React from 'react';
import './Goals.css';
import { goals } from '../../assets/data/data';

function Goals() {
    return (
        <div className="goals">
            {goals.map(goal => {
                let progressText;
                if (goal.progress === 0) {
                    progressText = " - not started yet!";
                } else if (goal.progress >= 1 && goal.progress <= 15) {
                    progressText = " - just starting!";
                } else if (goal.progress > 15 && goal.progress <= 50) {
                    progressText = " - making progress!";
                } else if (goal.progress > 50) {
                    progressText = " - almost there!";
                }

                return (
                    <div key={goal.name} className="goal">
                        <h4><strong>{goal.name}</strong>{progressText}</h4>
                        <div className="progress">
                            <div className="progressBar" role="progressbar" style={{ width: `${goal.progress}%` }} aria-valuenow={goal.progress} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Goals;