import react from "react";

import "/resources/css/Categories/categories.css";

import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ categories, auth, appName }) {
    return (
        <MainLayout auth={auth} appName={appName}>
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
                                src={`/storage/${category.image_path}`}
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
