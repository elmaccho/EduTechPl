import React from "react";

import MainLayout from "@/Layouts/MainLayout";

export default function Index({ auth, appName, category }){    
    return(
        <MainLayout auth={auth} appName={appName}>
            <h1>{category.name}</h1>
        </MainLayout>
    )
}