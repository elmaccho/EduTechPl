import Navbar from "@/Components/Navbar";
import SideMenu from "@/Components/SideMenu";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

import { useState } from 'react';

export default function Homepage({auth, appName}){
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const openSideMenu = () => {
      setIsSideMenuOpen(true);
    };
  
    const closeSideMenu = () => {
      setIsSideMenuOpen(false);
    };
    return(
        <MainLayout auth={auth} appName={appName}>
            <Head title="Strona główna"/>
        </MainLayout>
    )
}