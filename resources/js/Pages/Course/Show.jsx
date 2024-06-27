import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Show({ auth, course }){
    // console.log(course);
    return(
        <MainLayout auth={auth}>
            <Head title="Kurs"/>
        </MainLayout>
    )
}