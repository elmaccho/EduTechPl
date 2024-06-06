import React from "react";

import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";



import { useState } from 'react';
import SwiperGallery from "@/Components/SwiperGallery";
import PopularCategories from "@/Components/PopularCategories";
import TopCourses from "@/Components/TopCourses";
import Newsletter from "@/Components/Newsletter";
import MobileApp from "@/Components/MobileApp";
import Footer from "@/Components/Footer";

export default function Homepage({auth, appName}){
    return(
        <MainLayout auth={auth} appName={appName}>
            <Head title="Strona główna"/>
            <SwiperGallery />
            <PopularCategories />
            <TopCourses />
            <Newsletter/>
            <MobileApp/>
        </MainLayout>
    )
}