
const Sidebar = () => {
    return (
        <div className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <div className="flex">
                    <h3 className="text-gray-600 dark:text-white font-bold ">Logo</h3>
                </div>

                <ul className="flex flex-col gap-2">
                    <li className="text-gray-500 dark:text-white font-semibold">Menu Item</li>
                    <li className="text-gray-500 dark:text-white font-semibold">Menu Item</li>
                    <li className="text-gray-500 dark:text-white font-semibold">Menu Item</li>
                    <li className="text-gray-500 dark:text-white font-semibold">Menu Item</li>
                    <li className="text-gray-500 dark:text-white font-semibold">Menu Item</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar