import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

import '/resources/css/Profile/profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Index({ auth, user }) {
    return (
        <MainLayout auth={auth}>
            <Head title={`Profil ${user.name} ${user.surname}`}/>
            <div className="user-main-data-container">
                <div className="profile-row">
                    <div className="user-image-profile">
                        <div className="outside-ring">
                            <FontAwesomeIcon icon={faUser} className="user-profile-icon"/>
                        </div>
                    </div>
                    <div className="user-name-surname">
                        <h2 className="text-light "><b>{user.name} {user.surname}</b></h2>
                        <h3 className="text-light">
                            {user.getAccountType}
                        </h3>
                    </div>
                </div>
                <nav className="profile-nav">
                    <button className="nav-profile-button">
                        Profil
                    </button>
                    <button className="nav-profile-button">
                        Kursy
                    </button>
                    <button className="nav-profile-button">
                        Lista życzeń
                    </button>
                    <button className="nav-profile-button">
                        Notatki
                    </button>
                    <button className="nav-profile-button">
                        Recenzje
                    </button>
                </nav>
                <div className="about-wrapper">
                    <div className="row m-0">
                        <p className="text-light h3"><b>O mnie</b></p>
                    </div>
                    <div className="row m-0">
                        <p className="text-light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quod recusandae incidunt, molestias similique error sapiente, repudiandae in, aliquid aliquam repellat voluptates adipisci magni laboriosam eaque fuga ab sed atque eligendi harum deserunt. Laborum ex cum obcaecati culpa temporibus? Suscipit a pariatur, quod doloremque, quam dolores veritatis fuga ipsam et dolorum maiores quisquam labore iusto aliquid quia unde, laboriosam eum exercitationem hic voluptate dolorem reprehenderit! Laboriosam adipisci nostrum, impedit nemo possimus cumque aliquam qui deserunt iusto sunt voluptatibus saepe nesciunt dignissimos aliquid accusamus ullam id pariatur cupiditate deleniti corrupti provident repellendus error labore veniam! Repudiandae laboriosam cupiditate quod, excepturi, quaerat non dolore cumque modi ipsa officiis eveniet placeat veniam. Eius quam beatae accusamus mollitia. Neque similique expedita libero voluptate cum.
                        </p>
                    </div>
                    <div className="row m-0">
                        
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
