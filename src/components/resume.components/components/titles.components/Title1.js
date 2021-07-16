import React from 'react';
import './titles.styles.css';

const Title1 = (props) => {
    
    return (
        <h1 className="levelOne">
            {props.title}
        </h1>
    )
}

export default Title1;
