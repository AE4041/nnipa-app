"use client"
import React from "react";
import { useAtomValue } from "jotai";
import Navbar, { isActiveAtom } from "../ui/dashoard/navbar/Navbar";
import Sidebar from "../ui/dashoard/sidebar/Sidebar";
import classNames from "classnames";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isActive = useAtomValue(isActiveAtom)

    return (
        <div className="w-full h-full">
            <Sidebar />
            <Navbar />
            <div className={classNames({
                "relative top-[3.5rem] left-0 w-full ease-in-out duration-300": true,
                "md:left-[200px] md:w-[calc(100%-200px)]": !isActive,
                "md:left-[60px] md:w-[calc(100%-60px)]": isActive
            })}>
                <div className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout