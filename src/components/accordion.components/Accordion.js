import React, { useState, useRef, useEffect } from 'react';
import {FaAngleRight} from "react-icons/fa";
import "./accordion.style.css";

const Accordion = (props) => {

    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? 
        `${contentRef.current.scrollHeight}px` : '0px'
    }, [contentRef, active])

    const toggleActive = () => {
        setActive(!active);
    }

    return (
        <div className="accordionSection" data-testid='accordionid'>
            <button className="accordionTitle" onClick={toggleActive}>
                <div>
                    {props.title}
                </div>
                <span className={active ? 'accordionIcon rotate' : 'accordionIcon'}>
                    <FaAngleRight/>
                </span>
            </button>
            <div ref={contentRef} className="accordionContent">
                {props.children}
            </div>            
        </div>
    );
}

export default Accordion;
