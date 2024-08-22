import { Button } from "@nextui-org/react"
import { ChartNoAxesColumn, ChartNoAxesGantt, Contact, UsersRound } from "lucide-react"

const OverviewPage = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="space-y-16 pt-6">
                <div>
                    <div className="mb-6 flex w-full items-center justify-between">
                        <div className="hidden sm:block">
                            <h3 className="text-gray-800 text-sm font-semibold">Overview</h3>
                        </div>
                        <div className="flex gap-x-2 shrink-0 text-sm">
                            <Button variant="flat" radius="sm" className="bg-[#8556f5] text-white">Get Started</Button>
                            <Button variant="bordered" radius="sm" className="">Let's Chat</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="md:col-span-2 col-span-4 sm:col-span-6 lg:col-span-2">
                            <div className="flex flex-col justify-center p-5 space-y-3 bg-sky-100/70 rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-700 text-xs capitalize">contacts</p>
                                    <div className="flex items-center justify-center rounded-md size-[2rem] bg-sky-200">
                                        <Contact size={20} className="text-sky-500" />
                                    </div>
                                </div>
                                <h3 className="text-gray-800">
                                    <span className="text-3xl font-semibold">200</span>
                                </h3>
                            </div>
                        </div>
                        <div className="md:col-span-2 col-span-4 sm:col-span-6 lg:col-span-2">
                            <div className="flex flex-col justify-center p-5 space-y-3 bg-purple-100/70 rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-700 text-xs capitalize">Groups</p>
                                    <div className="flex items-center justify-center rounded-md size-[2rem] bg-purple-200">
                                        <UsersRound size={20} className="text-purple-500" />
                                    </div>
                                </div>
                                <h3 className="text-gray-800">
                                    <span className="text-3xl font-semibold">8</span>
                                </h3>
                            </div>
                        </div>
                        <div className="md:col-span-2 col-span-4 sm:col-span-6 lg:col-span-2">
                            <div className="flex flex-col justify-center p-5 space-y-3 bg-sky-100/70 rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-700 text-xs capitalize">custom fields</p>
                                    <div className="flex items-center justify-center rounded-md size-[2rem] bg-sky-200">
                                        <ChartNoAxesGantt size={20} className="text-sky-500" />
                                    </div>
                                </div>
                                <h3 className="text-gray-800">
                                    <span className="text-3xl font-semibold">20</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OverviewPage