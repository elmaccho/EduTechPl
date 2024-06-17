import React from "react";
import SideMenu from "@/Components/Admin/SideMenu";
import Content from "@/Components/Admin/Content";
import { usePage } from "@inertiajs/react";

export default function AdminLayout({ user }){
  const { appName } = usePage().props;

    return(
      <div className="admin-panel-container">
          <SideMenu appName={appName}/>
          <Content user={user}/>
      </div>
    )
}