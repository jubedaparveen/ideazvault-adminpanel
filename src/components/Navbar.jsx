import React from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
     return (
          <div className='flex justify-end md:justify-between bg-[#0E2A10] text-white py-4 px-10 w-[92%] fixed md:w-[83%] z-10 top-0'>
               <div className=' w-[50%]  hidden md:flex items-center gap-3  bg-[#87a186] rounded-full py-1 px-3'>
                    <MdSearch  size={25}/>
                    <input type="text" name='search' placeholder='Search.... ' className='   outline-0' />
               </div>
               <div className='flex space-x-5'>
                    <button>
                         <div className='p-1 hover:bg-[#87a186] rounded-md hover:font-bold hover:text-[#0E2A10]  border border-gray-700 '>
                              <IoNotificationsSharp />
                         </div>
                    </button>

                    <button>
                         <div className='p-1 hover:bg-[#87a186] rounded-md hover:font-bold hover:text-[#0E2A10]  border border-gray-700 '>
                              <AiOutlineMessage />
                         </div>
                    </button>
                    <div className='flex flex-col  text-[.7rem]'>
                         <span>Jubeda Parveen</span>
                         <span className='text-right'>Admin</span>
                    </div>
                    <div className='w-8 h-8 rounded-full hover:bg-[#87a186]  hover:font-bold hover:text-[#0E2A10] '>
                         <img src="images/jubedapic.png" className='w-8 h-8 border border-gray-700 rounded-full'/>
                    </div>
               </div>
          </div>
     )
}

export default Navbar