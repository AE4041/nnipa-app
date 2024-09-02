"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export interface MenuProps {
    href: string;
    label?: string;
    icon?: JSX.Element;
    className?: string;
    isActive?: boolean;
}

export const MenuLink = ({ href, label, icon }: MenuProps) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={classNames(
                "flex items-center px-3 py-2 text-[#414955] transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-[#ede9fe] dark:hover:bg-gray-800 dark:hover:text-[#8b5cf6] hover:text-[#8b5cf6]",
                {
                    "bg-[#ede9fe] text-[#8b5cf6] font-medium": pathname === href,
                }
            )}
        >
            {icon}
            <span className="mx-2 text-sm font-normal">{label}</span>
        </Link>
    );
};
