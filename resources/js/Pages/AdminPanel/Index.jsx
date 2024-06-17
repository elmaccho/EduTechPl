import React from "react";

import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Users from "./Pages/Users";
import Categories from "./Pages/Categories";

export default function Index({ user, users }){
    return(
        <AdminLayout user={user}>
            <Head title="Panel Administracyjny"/>
            <Users />
            <Categories />
        </AdminLayout>
    )
}