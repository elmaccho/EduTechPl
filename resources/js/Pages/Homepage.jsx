import Navbar from "@/Components/Navbar";
import SideMenu from "@/Components/SideMenu";
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
        <div className="main-container">
            <Head title="Strona główna"/>
            <Navbar appName={appName} auth={auth} openSideMenu={openSideMenu}/>
            <SideMenu appName={appName} auth={auth} isOpen={isSideMenuOpen} closeSideMenu={closeSideMenu}/>
        </div>
    )
}