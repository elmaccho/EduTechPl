import React from "react";

import "/resources/css/Admin/content.css";

import Navbar from "@/Components/Admin/Navbar";

export default function Content({ user, handleOpenSideMenu, isOpened, children }){
    return(
        <div className="page-content">
          <Navbar user={user} handleOpenSideMenu={handleOpenSideMenu} isOpened={isOpened}/>
            <div className="main-content">
                { children }
            </div>
        </div>
    )
}