import react from "react";

import "/resources/css/Categories/categories.css";

import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ categories, auth, appName, user }) {
    return (
        <MainLayout auth={auth} appName={appName} user={user}>
            <Head title="Kategorie" />
            <div className="categories-wrapper">
                {categories.map((category) => (
                    <Link
                        href={route("courseslist.index", category.name)}
                        className="category-link"
                        key={category.id}
                    >
                        <div className="category-box">
                            <img
                                src="https://picsum.photos/300/250?random=1"
                                className="category-image"
                            />
                            <div className="row m-0 text-center">
                                <p>{category.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </MainLayout>
    );
}
