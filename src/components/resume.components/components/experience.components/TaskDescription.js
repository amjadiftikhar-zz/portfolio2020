import React from 'react';
import './workExperience.styles.css';

const TaskDescription = (props) => {
    
    return (
        <>
            {/* <ul className="taskDescription"> */}
                <li>{props.taskDescription}</li>
                {/* <li>
                    Responsible for the frontend tasks related to building a 
                    platform that hosts different tools for R & D
                </li>
                <li>
                    Planning and setting up frontend architecture, diagnosing, 
                    troubleshooting and resolving technical issues
                </li>
                <li>
                    Developing desi and collaboration with the design team
                </li>
                <li>
                </li> */}
            {/* </ul> */}
        </>
    )
}

export default TaskDescription
