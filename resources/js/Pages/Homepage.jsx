import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Homepage({auth, appName}){
    return(
        // <div>
        //     {auth.user ? (
        //         <Link href={route('logout')} method="post" as="button">
        //             wyloguj
        //         </Link>

        //     ) : (
        //         <>
        //         <Link
        //             href={route('login')}
        //             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
        //         >
        //             Log in
        //         </Link>
        //         <Link
        //             href={route('register')}
        //             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
        //         >
        //             Register
        //         </Link>
        //     </>
        //     )}
        // </div>
        <div className="main-container">
            <Navbar appName={appName} />
        </div>
    )
}