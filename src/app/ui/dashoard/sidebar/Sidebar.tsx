import Image from "next/image";
import { MenuLink, MenuProps } from "./MenuLink";
import Logo from "../../../../../public/logo.png";
import {
    HomeIcon, CrmIcon, SalesIcon, TaskIcon, MegaPhoneIcon, FieldIcon,
    TeamsIcon, IntegrationIcon, BillIcon, SupportIcon, ActivityIcon
} from "@/component/icons/Icons";


interface MenuSection {
    title: string;
    items: MenuProps[];
}


const SidebarSection = ({ title, items }: MenuSection) => (
    <div className="space-y-0">
        <label className="px-3 text-[0.60rem] text-gray-700 uppercase dark:text-gray-400">
            {title}
        </label>
        {items.map((item, idx) => (
            <MenuLink key={idx} href={item.href} label={item.label} icon={item.icon} />
        ))}
    </div>
);

const Sidebar = () => {
    const menuSections: MenuSection[] = [
        {
            title: "modules",
            items: [
                { href: "/", label: "Overview", icon: <HomeIcon /> },
                { href: "#", label: "CRM", icon: <CrmIcon /> },
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
        <div className="fixed">
            <aside className="flex flex-col w-[200px] h-screen px-5 py-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <div className="flex items-center justify-center w-20">
                    <Image src={Logo} alt="Logo" />
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-5">
                        {menuSections.map((section, idx) => (
                            <SidebarSection key={idx} title={section.title} items={section.items} />
                        ))}
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
