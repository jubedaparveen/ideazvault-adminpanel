import React from 'react'
import Image from 'next/image';
import Logo from '../../public/images/logo.jpg'
import { GiTireIronCross } from "react-icons/gi";

const EditAboutModels = ({ editAboutModels, setEditAboutModels }) => {
     return (
          <div className={`${editAboutModels ? "block" : "hidden"} w-[50rem]  h-auto items-center justify-center fixed top-[6rem] left-[30rem]  z-[999999999999] p-4 rounded-sm bg-[#0E2A10] text-[#0E2A10] border border-white/20 `}>
               <div className='border border-gray-400 rounded-sm shadow-2xl p-4 bg-[#87a186]'>
                    <div className='w-full flex justify-between border-b border-gray-400 mb-4 pb-2'>
                         <div className=' '>
                              <h2 className='text-2xl font-bold text-center uppercase'>Edit About IdeazVault.com </h2>
                         </div>
                         <div className='w-8 h-8 rounded-full flex justify-center items-center text-white hover:bg-[#316334] bg-[#0E2A10]  font-bold' onClick={() => setEditAboutModels(false)}>
                              <GiTireIronCross />
                         </div>
                    </div>
                    <form method='' className='w-full'>
                         <div className=''>
                              <label className='p-1 uppercase'>Edit Logo Image</label>
                              <div className='w-full'>
                                   <input type="file"  name="thumbnail" className="w-full rounded-full file:mr-10 file:rounded-full file:border-0 file:bg-green-950 
                                   file:text-[#87a186] border file:px-16 file:py-2 file:text-sm file:font-semibold hover:file:bg-[#2b572a]" />
                              </div>
                         </div>
                         <div className='my-3'>
                              <label className='px-1 uppercase'> Edit About IdeazVault.com </label>
                              <textarea style={{ height: '8rem' }} name="description" type="text" className='bg-[#2b572a]/30 outline-0 w-full placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Edit About IdeazVault.com  here' />
                         </div>

                         <div className='mt-6 cursor-pointer bg-[#0E2A10] text-[#87a186] text-center py-2 rounded-full hover:bg-[#2b572a] border hover:border-[#0E2A10]  uppercase  tracking-widest'>
                              <button> Submit </button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default EditAboutModels