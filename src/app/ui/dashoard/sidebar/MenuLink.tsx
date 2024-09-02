"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useAtomValue } from "jotai";
import { isActiveAtom } from "../navbar/Navbar";

export interface MenuProps {
    href: string;
    label?: string;
    icon?: JSX.Element;
    className?: string;
    isActive?: boolean;
}

export const MenuLink = ({ href, label, icon }: MenuProps) => {
    const pathname = usePathname();
    const isActive = useAtomValue(isActiveAtom)

    return (
        <Link
            href={href}
            className={classNames(
                "flex items-center px-3 py-2 text-[#414955] duration-300 ease-in-out rounded-lg dark:text-gray-200 hover:bg-[#ede9fe] dark:hover:bg-gray-800 dark:hover:text-[#8b5cf6] hover:text-[#8b5cf6]",
                {
                    "bg-[#ede9fe] text-[#8b5cf6] font-medium": pathname === href,
                }
            )}
        >
            {icon}
            {!isActive && <span className="mx-2 text-sm font-normal">{label}</span>}
        </Link>
    );
};
