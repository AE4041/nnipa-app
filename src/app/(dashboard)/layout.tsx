import React from "react";
import Navbar from "../ui/dashoard/navbar/Navbar";
import Sidebar from "../ui/dashoard/sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="absolute top-0 flex flex-col w-full h-screen">
            <Sidebar />
            <div className="flex-1 relative top-0 left-0 bottom-0 mb-[5rem] w-full md:left-[200px] md:w-[calc(100%-200px)]">
                <Navbar />
                <div className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout