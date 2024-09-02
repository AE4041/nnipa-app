"use client"
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react"
import { Avatar } from "@nextui-org/react";
import { useAtom } from "jotai";
import { PanelLeftClose, Bell, SunMoon, Search, PanelRightClose } from "lucide-react"
import atomWithToggle from "@/utils/atomWithToggle";
import classNames from "classnames";

export const isActiveAtom = atomWithToggle(false)

const Navbar = () => {
    const [isActive, toggle] = useAtom(isActiveAtom)

    return (
        <div className={classNames({
            "flex justify-between fixed z-[1001] left-0 right-0 md:right-auto w-full bg-white border-b ease-in-out duration-300 ": true,
            "md:left-[200px] md:w-[calc(100%-200px)]": !isActive,
            "md:left-[60px] md:w-[calc(100%-60px)]": isActive
        })}>
            <div className="flex items-center gap-x-2 px-3 py-[0.50rem]">
                {isActive ?
                    <Button isIconOnly variant="light" onClick={() => toggle(false)} >
                        <PanelRightClose className="text-gray-700" strokeWidth={1.5} size={22} />
                    </Button> :
                    <Button isIconOnly variant="light" onClick={() => toggle(true)} >
                        <PanelLeftClose className="text-gray-700" strokeWidth={1.5} size={22} />
                    </Button>
                }
                <h3 className="flex gap-x-2.5 items-center text-sm text-gray-400">
                    <span>Dashboard</span> <span>/</span>
                    <span className="text-gray-800">Overview</span>
                </h3>
            </div>
            <div className="flex gap-x-3 mr-5 items-center">
                <div className="">
                    <Input
                        type="email"
                        label=""
                        variant="bordered"
                        placeholder="Search anything..."
                        radius="sm"
                        className="w-[250px]"
                        startContent={<Search className="text-gray-500" size={18} strokeWidth={1.5} />}
                    />
                </div>
                <div className="flex items-center">
                    <Button isIconOnly variant="light">
                        <SunMoon className="text-gray-700" strokeWidth={1.5} size={22} />
                    </Button>
                    <Button isIconOnly variant="light" className="mr-2">
                        <Bell className="text-gray-700" strokeWidth={1.5} size={22} />
                    </Button>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
                </div>
            </div>
        </div>
    )
}

export default Navbar