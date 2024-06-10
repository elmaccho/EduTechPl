import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import react from "react";

export default function Index({ categories, auth, appName }){
    return(
        <MainLayout auth={auth} appName={appName}>
            <Head title="Kategorie" />
            {categories.map(category => (
                <p key={category.id}>{category.name}</p>
            ))}
        </MainLayout>
    )
}