import React from 'react'
import { BsEyeFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const Profile = () => {
  return (
    <div className='p-4   '>
      <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>
        <div className='flex justify-between items-center text-2xl border-b-2 border-[#87a186]/20 pb-4 hover:text-[#0E2A10] '>
          <div className=' '>
            <h2>Profile</h2>
          </div>
          <div className='flex gap-4'>
            <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
              <button className='cursor-pointer'>
                <IoMdAdd />
              </button>
            </div>
            
            <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
              <button className=''><RiEdit2Fill /></button>
            </div>
          </div>
        </div>


        <div className='flex justify-between gap-6 border-b-2 border-[#87a186]/20 py-4 w-full '>
          <div className='basis-2/2 space-y-4 px-6 py-6 border'>
           <div className='space-x-10'>
            <label >Name</label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> LinkedIn Id </label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> Facebook Id</label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> Twitter Id</label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> LinkedIn Id </label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
          </div>
          <div className='basis-1/2 border'>
            <img src="images/jubedapic.png" alt="" />
          </div>
        </div>

        {/* <div className='flex justify-between gap-6 border-b-2 border-[#87a186]/20 py-4 w-full '>
          <div className='basis-2/2 space-y-4 px-6 py-6 border'>
           <div className='space-x-10'>
            <label >Name</label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> LinkedIn Id </label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> Facebook Id</label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> Twitter Id</label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
           <div className='space-x-10'>
            <label> LinkedIn Id </label>
            <input type="text" className='bg-amber-100/10 rounded-sm w-full p-1'/>
           </div>
          </div>
          <div className='basis-1/2 border'>
            <img src="images/jubedapic.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Profile