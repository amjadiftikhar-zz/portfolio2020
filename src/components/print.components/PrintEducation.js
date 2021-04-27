import React, {useRef} from 'react'
import ReactToPrint from "react-to-print";
import Education from '../education.components/Education';

function PrintEducation(props) {
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

export default PrintEducation







// import React, {useRef} from 'react'
// import ReactToPrint from "react-to-print";
// import Education from '../education.components/Education';

// function PrintEducation() {
//     const componentRef = useRef();
//     return (
//         <div>
//             <ReactToPrint 
//                 trigger={() => <a className="downloadClass"> Download! </a>}
//                 content={() => componentRef.current}
//             />
//             <div className="printSource" ref={componentRef}>
//                 <Education  />
//             </div>
//         </div>
//     )
// }

// export default PrintEducation
