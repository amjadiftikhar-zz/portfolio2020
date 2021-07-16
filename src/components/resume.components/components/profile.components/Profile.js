import React from 'react';
import profilePic from "../../../../images/profilePic.png";
import {IoIosMail} from "react-icons/io";
import {GoDeviceMobile} from "react-icons/go";
import {DiWebplatform} from "react-icons/di";

import './profile.styles.css';


const Profile = () => {

    return (
        <div className='profileImageSection'>
            <img className='profilePicture' src={profilePic} alt="" />
            <div className='contactDetails'> 
                <span><IoIosMail className="contactIcons" />amjadiftikhar_99@hotmail.com</span>
                <span><GoDeviceMobile className="contactIcons"/>+4552920945</span>
                <span><DiWebplatform className="contactIcons"/>
                    <a href="https://amjadiftikhar.netlify.app/" target="_blank">
                        amjadiftikhar.netlify.app/
                    </a>                    
                </span> 
            </div>          
        </div>
    )
}

export default Profile;
