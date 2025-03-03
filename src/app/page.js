// import Image from "next/image";
// import DashBoardLayout from "./dashboard/layput";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[#e0cbb0] h-screen flex items-center justify-center">
        <div className=" md:w-[70%] lg:w-[40%] w-[90%] bg-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="p-6 border border-gray-300 rounded-md">
            <h1 className="text-xl font-semibold mb-10 pb-2 border-b border-gray-300 tracking-widest uppercase">Login</h1>
            <from>
              <div className="mb-6">
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-none " placeholder="Enter your Email" />
              </div>
              <div className="mb-6">
                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-0" placeholder="Enter Password" />
              </div>
              <Link href="/Adminpage">
              <div className="mt-10">
                <button className="w-full p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:uppercase tracking-widest ">Login</button>
              </div>
              </Link>
            </from>
            <div className="text-end">
              <Link  href="#" className="text-gray-400 text-sm hover:text-green-900 hover:underline ">Forget Password</Link>
            </div>
            <Link href="/">
              <div className="mt-10">
                <button className="w-full p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:tracking-widest md:uppercase ">Login with Google</button>
              </div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}


// Breakpoint prefix	Minimum width	CSS
// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... }
