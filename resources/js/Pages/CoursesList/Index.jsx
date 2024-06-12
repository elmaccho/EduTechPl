import React from "react";

import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, appName, category }){    
    return(
        <MainLayout auth={auth} appName={appName}>
            <Head title={category.name}/>
            <h1>{category.name}</h1>
        </MainLayout>
    )
}