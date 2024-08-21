import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
    item?: any;
    className?: string;
    isActive?: boolean;
}


const MenuLink = ({ item, className, isActive }: MenuProps) => {
    const pathname = usePathname()

    return (
        <Link href={item.path} className={`${className} ${pathname === item.path && isActive}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink;