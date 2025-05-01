import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
    return (

        <div className="h-screen flex ">
            <div className=" md:w-[17%] w-[8%] sm:w-[8%] bg-[#0E2A10] text-white md:p-4 sm:p-4 p-2">
                <div className=" sm:p-2 md:p-4 md:border md:border-gray-700/50 rounded-lg"> 
                    <Sidebar />
                </div>
            </div>
            <div className=" md:w-[83%] w-[92%]  bg-[#87a186] border-l border-gray-800/50 overflow-y-auto h-[calc(100%-.1rem)]">
                <div>
                    <Navbar />
                </div>
                <div className="mt-[4.1rem] fixed w-[92%] md:w-[83%] z-10 top-0">
                    <h3 className="text-sm bg-[#0E2A10] text-[#87a186] px-10 py-2 border-t border-gray-700/50 tracking-widest uppercase ">Dashboard</h3>
                </div>
                <div className="mt-[6.6rem]">
                    {children}
                </div>
            </div>
        </div>
    );
}