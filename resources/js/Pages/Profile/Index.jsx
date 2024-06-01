import React from "react";
import Navbar from "@/Components/Navbar";
import SideMenu from "@/Components/SideMenu";
import MainLayout from "@/Layouts/MainLayout";


export default function Index({ auth }) {
    return (
      <MainLayout auth={auth}>
        <h1>Profil</h1>

      </MainLayout>
    );
  }