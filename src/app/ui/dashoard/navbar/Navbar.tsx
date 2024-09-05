"use client"
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react"
import { Avatar } from "@nextui-org/react";
import atomWithToggle from "@/utils/atomWithToggle";
import classNames from "classnames";
import { useTheme } from "@/hooks/useTheme";
import { useAtom } from "jotai";
import useMobile from "@/hooks/useMobile";
import { PanelLeftClose, Bell, SunMoon, Search, PanelRightClose, Moon } from "lucide-react"


export const isActiveAtom = atomWithToggle(false)

const Navbar = () => {
    const { isMobile } = useMobile()
    const { theme, toggleTheme } = useTheme()
    const [isActive, toggle] = useAtom(isActiveAtom)

    return (
        <div className={classNames({
            "fixed z-50 left-0 right-0 md:right-auto w-full bg-white border-b ease-in-out duration-300 ": true,
            "md:left-[200px] md:w-[calc(100%-200px)]": !isActive,
            "md:left-[60px] md:w-[calc(100%-60px)]": isActive
        })}>
            <div>
                <div className="bg-yellow-200">
                    <div className="flex items-center gap-3 text-sm  mx-auto w-full max-w-7xl px-4 py-[0.35rem]">
                        <h2 className="text-gray-800"><span>&#128226;</span> Your prepaid balance is low, top up now with more funds to avoid service interruption.</h2>
                        <p className="flex items-center justify-center px-2 py-1 rounded-full bg-yellow-500">
                            <span className="text-gray-800 text-xs">Top Up</span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-between w-full">
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
                            {!isMobile && <Input
                                type="email"
                                label=""
                                variant="bordered"
                                placeholder="Search anything..."
                                radius="sm"
                                className="w-[250px]"
                                startContent={<Search className="text-gray-500" size={18} strokeWidth={1.5} />}
                            />}
                        </div>
                        <div className="flex items-center">
                            <Button isIconOnly variant="light" onClick={toggleTheme}>
                                {theme === 'dark'
                                    ? <SunMoon className="text-gray-700" strokeWidth={1.5} size={22} />
                                    : <Moon className="text-gray-700" strokeWidth={1.5} size={22} />
                                }
                            </Button>
                            <Button isIconOnly variant="light" className="mr-2">
                                <Bell className="text-gray-700" strokeWidth={1.5} size={22} />
                            </Button>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar