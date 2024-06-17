import React from "react";

import "/resources/css/Admin/sidemenu.css"

export default function SideMenu({ appName }){
    return(
        <div className="sidemenu-container min-h-screen">
            <div className="sidemenu-logo">{appName}</div>
        </div>
    )
}