import React from "react";

import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Show({ auth, course }){
    return(
        <MainLayout auth={auth}>
            <Head title="Kurs"/>
        </MainLayout>
    )
}