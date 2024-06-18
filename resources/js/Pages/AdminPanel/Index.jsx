import React from "react";

import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";



export default function Index({ user }){
    return(
        <AdminLayout user={user}>
            <Head title="Panel Administracyjny"/>
            <h1 className="h1">Dashboard</h1>
        </AdminLayout>
    )
}