import React, { useState } from "react";
import SideMenu from "@/Components/Admin/SideMenu";
import Content from "@/Components/Admin/Content";
import { usePage } from "@inertiajs/react";

export default function AdminLayout({ user }){
  const [isOpened, setIsOpened] = useState(false);

  const handleCloseSideMenu = () => {
    setIsOpened(false);
  }
  const handleOpenSideMenu = () => {
    setIsOpened(true);
  }
  const { appName } = usePage().props;

    return(
      <div className="admin-panel-container">
          <SideMenu appName={appName} handleCloseSideMenu={handleCloseSideMenu} isOpened={isOpened}/>
          <Content user={user} handleOpenSideMenu={handleOpenSideMenu}/>
      </div>
    )
}