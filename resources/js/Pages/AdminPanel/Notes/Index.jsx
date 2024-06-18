import react from "react";

import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Index({ user }) {
    return (
        <AdminLayout user={user}>
            <Head title="Panel Administracyjny" />

            <div>
                <h1 className="h1">Notatki</h1>
            </div>
        </AdminLayout>
    );
}
