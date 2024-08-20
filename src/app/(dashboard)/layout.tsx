import React from "react";
import Navbar from "../ui/dashoard/navbar/Navbar";
import Sidebar from "../ui/dashoard/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <Sidebar />
            <div className="flex flex-col">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout