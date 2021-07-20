import React from 'react';
import './workExperience.styles.css';

const TaskDescription = (props) => {
    
    return (
        <div className="taskDetails">
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
                    Developing design and collaboration with the design team
                </li>
                <li>
                    Making reusable components and writing test using React testing library
                </li> */}
            {/* </ul> */}
        </div>
    )
}

export default TaskDescription
