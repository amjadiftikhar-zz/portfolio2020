import React from 'react';
import {IoIosMail} from "react-icons/io";
import {GoDeviceMobile} from "react-icons/go";
import {DiWebplatform} from "react-icons/di";
import profilePic from "../../../../images/profilePic.png";

import './profile.styles.css';


const Profile = () => {

    return (
        <div className='profileImageSection'>
            <img className='profilePicture' src={profilePic} alt="" />
            <div className='contactDetails'> 
                <span><IoIosMail className="contactIcons" />
                    amjadiftikhar_99@hotmail.com
                </span>
                <span><GoDeviceMobile className="contactIcons"/>
                    +4552920945
                </span>
                <span><DiWebplatform className="contactIcons"/>
                    <a  target="_blank" rel="noopener noreferrer" 
                        href="https://amjadiftikhar.netlify.app/">
                        amjadiftikhar.netlify.app/
                    </a>                    
                </span> 
            </div>          
        </div>
    );
}

export default Profile;
