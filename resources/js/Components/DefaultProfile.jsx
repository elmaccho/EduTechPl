import react from "react";

import '/resources/css/defaultprofile.css'

import defaultImage from '/public/img/profile/profile.svg'

export default function DefaultProfile({ user }){
    return (
        <div className="default-profile-wrapper">
            <img src={defaultImage} alt={user.name + user.surname}/>
        </div>
    )
}