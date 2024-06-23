import React from "react";

export default function About({ user }) {
    return (
        <div className="about-wrapper">
            <div className="row m-0">
                <p className="text-light h3">
                    <b>O mnie</b>
                </p>
            </div>
            <div className="row m-0 overflow-hidden">
                <p className="text-light user-about">
                    {user.about ? user.about : "Brak opisu"}
                </p>
            </div>
            <div className="row m-0"></div>
        </div>
    );
}
