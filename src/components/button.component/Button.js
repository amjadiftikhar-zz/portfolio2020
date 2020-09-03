import React from 'react';
import {Button} from "react-bootstrap";

function ButtonComponent(props) {
    return (
        <Button type="button">
           {props.title}
        </Button>
    )
}

export default ButtonComponent;
