import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react"
import { Avatar } from "@nextui-org/react";
import { PanelLeftClose, Bell, SunMoon, Search } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-between fixed z-[1001] left-0 right-0 md:right-auto md:left-[200px] w-full md:w-[calc(100%-200px)] bg-white border-b">
            <div className="flex items-center gap-x-2 px-3 py-[0.50rem]">
                <Button isIconOnly variant="faded" className="border-none bg-transparent hover:bg-gray-100">
                    <PanelLeftClose className="text-gray-700" strokeWidth={1.5} size={22} />
                </Button>
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
                    <Button isIconOnly variant="faded" className="border-none bg-transparent hover:bg-gray-100">
                        <SunMoon className="text-gray-700" strokeWidth={1.5} size={22} />
                    </Button>
                    <Button isIconOnly variant="faded" className="border-none mr-2 bg-transparent hover:bg-gray-100">
                        <Bell className="text-gray-700" strokeWidth={1.5} size={22} />
                    </Button>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
                </div>
            </div>
        </div>
    )
}

export default Navbar