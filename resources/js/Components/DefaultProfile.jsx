import react from "react";

import "/resources/css/userprofile.css";

import defaultImage from "/public/img/profile/profile.svg";

export default function UserProfile({ user }) {
    return (
        <div className="default-profile-wrapper">
            {user.profile_image_path == null ? (
                <img src={defaultImage} alt={user.name + user.surname} />
            ) : (
                <img
                    src={`/storage/${user.profile_image_path}`}
                    alt={user.name + " " + user.surname}
                    className="profile-picture"
                />
            )}
        </div>
    );
}
