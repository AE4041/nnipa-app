"use client"
import Image from "next/image";
import { MenuLink, MenuProps } from "./MenuLink";
import Logo from "../../../../../public/logo.png";
import LogoSmall from "../../../../../public/logo-b.png";
import {
    HomeIcon, CrmIcon, SalesIcon, TaskIcon, MegaPhoneIcon, FieldIcon,
    TeamsIcon, IntegrationIcon, BillIcon, SupportIcon, ActivityIcon
} from "@/component/icons/Icons";
import { useAtomValue } from "jotai";
import { isActiveAtom } from "../navbar/Navbar";
import classNames from "classnames";


interface MenuSection {
    title: string;
    items: MenuProps[];
    isActive: boolean;
}


const SidebarSection = ({ title, items, isActive }: MenuSection) => (
    <div className="space-y-1">
        <label className="px-3 text-[0.60rem] text-gray-700 uppercase dark:text-gray-400">
            {!isActive && title}
        </label>
        {items.map((item, idx) => (
            <MenuLink key={idx} href={item.href} label={item.label} icon={item.icon} />
        ))}
    </div>
);

const Sidebar = () => {
    const isActive = useAtomValue(isActiveAtom)

    const menuSections: Omit<MenuSection, 'isActive'>[] = [
        {
            title: "modules",
            items: [
                { href: "/", label: "Overview", icon: <HomeIcon /> },
                { href: "crm", label: "CRM", icon: <CrmIcon /> },
                { href: "#", label: "Sales", icon: <SalesIcon /> },
                { href: "#", label: "Tasks", icon: <TaskIcon /> },
                { href: "campaigns", label: "Campaigns", icon: <MegaPhoneIcon /> },
                { href: "#", label: "Custom Fields", icon: <FieldIcon /> },
            ],
        },
        {
            title: "Account",
            items: [
                { href: "#", label: "Teams", icon: <TeamsIcon /> },
                { href: "#", label: "Integrations", icon: <IntegrationIcon /> },
                { href: "#", label: "Billing", icon: <BillIcon /> },
                { href: "#", label: "Activities", icon: <ActivityIcon /> },
                { href: "#", label: "Support", icon: <SupportIcon /> },
            ],
        },
    ];

    return (
        <div className={classNames({
            "fixed flex flex-col h-screen px-5 py-5 overflow-y-auto duration-300 ease-in-out lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-300": true,
            "w-[200px]": !isActive,
            "w-[60px]": isActive
        })}>
            <div className="flex items-center justify-center w-20">
                <Image src={Logo} alt="Logo" />
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-5">
                    {menuSections.map((section, idx) => (
                        <SidebarSection key={idx} title={section.title} items={section.items} isActive={isActive} />
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
