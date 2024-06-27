import React from "react";

import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Create({ auth, }){
    return(
        <MainLayout auth={auth}>
            <Head title="Utwórz kurs"/>
        </MainLayout>
    )
}