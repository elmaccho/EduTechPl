import React from "react";
import Navbar from "@/Components/Navbar";
import SideMenu from "@/Components/SideMenu";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <MainLayout auth={auth}>
            <Head title={`Profil ${auth.user.name} ${auth.user.surname}`}/>
        </MainLayout>
    );
}
