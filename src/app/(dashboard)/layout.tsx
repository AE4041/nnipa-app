import React from "react";
import Navbar from "../ui/dashoard/navbar/Navbar";
import Sidebar from "../ui/dashoard/sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <Sidebar />
            <div className="flex flex-col">
                <Navbar />
                <div className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout