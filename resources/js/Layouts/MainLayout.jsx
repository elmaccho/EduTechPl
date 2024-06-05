import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import SideMenu from "@/Components/SideMenu";
import { usePage } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";



export default function MainLayout({ children, auth, user}){
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
    const openSideMenu = () => {
      setIsSideMenuOpen(true);
    };
  
    const closeSideMenu = () => {
      setIsSideMenuOpen(false);
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeSideMenu();
      }
    };
  
    useEffect(() => {
      if (isSideMenuOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isSideMenuOpen]);

    const { appName } = usePage().props;

    return (
      <div className="main-container">
        <Navbar appName={appName} auth={auth} openSideMenu={openSideMenu} />
        <div ref={menuRef}>
          <SideMenu appName={appName} auth={auth} isOpen={isSideMenuOpen} closeSideMenu={closeSideMenu} />
        </div>
        <div className="content">
          {children}
        </div>
        <Footer appName={appName}/>
      </div>
    );
  };