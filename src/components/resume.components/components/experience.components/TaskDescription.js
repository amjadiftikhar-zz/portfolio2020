import React from 'react';
import './workExperience.styles.css';

const TaskDescription = (props) => {
    
    return (
        <>
            {/* <ul className="taskDescription"> */}
                <li>{props.taskDescription}</li>
                {/* <li>
            ding                 D
                </li>
                <li>
                    Planning and seng up frontend architecture, diagnosing, 
                    troubleshooting and resolving technical issues
                </li>
                <li>
                    Developing des and collaboration with the design team
                </li>
                <li>
                </li> */}
            {/* </ul> */}
        </>
    )
}

export default TaskDescription
