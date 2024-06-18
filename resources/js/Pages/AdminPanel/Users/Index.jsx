import react from "react";

import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Index({ users, user }) {
    return (
        <AdminLayout user={user}>
            <Head title="Użytkownicy" />

            <div>
                <h1 className="h1">Użytkownicy</h1>
                {users.map((user) => {
                    <li key={user.id}>{user.name}</li>;
                })}
            </div>
        </AdminLayout>
    );
}
