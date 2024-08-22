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
                "flex items-center px-3 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700",
                {
                    "bg-red-500 text-white": pathname === href,
                }
            )}
        >
            {icon}
            <span className="mx-2 text-sm font-medium">{label}</span>
        </Link>
    );
};
