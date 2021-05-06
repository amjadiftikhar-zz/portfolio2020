import React, {useRef} from 'react'
import ReactToPrint from "react-to-print";

const PrintEducation = (props) => {

    const componentRef = useRef();

    return (
        <div>
            <ReactToPrint 
                trigger={() => <a className="downloadClass"> Download resume </a>}
                content={() => componentRef.current}
            />
            <div className="printSource" ref={componentRef}>
                {props.children}
            </div>
        </div>
    )
}

export default PrintEducation;







