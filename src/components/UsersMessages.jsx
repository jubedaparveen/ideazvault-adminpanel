import React from 'react';
import { FaRegStar } from "react-icons/fa";
import Logo from '../../public/images/jubedapic.png';
import Image from 'next/image';

const UsersMessages = () => {
     return (
          <div className='p-4 bg-amber-800/50 rounded-lg text-white'>
               <div className='border-b-2 border-amber-800/50 pb-4'>
                    <h1 className='text-xl font-semibold'>Users Messages</h1>
               </div>
               <div className='border-b-2 border-amber-800/50 pb-4'>
                    <div className='flex flex-row justify-between gap-2 mt-4 '>
                         <div className='w-15 h-10 border rounded-full '>
                              <Image src={Logo} alt="" className='w-15 h-10 border-2 rounded-full' />
                         </div>
                         <div className=''>
                              <span className='flex justify-between'>
                                   <h2>Jubeda Parveen</h2>
                                   <span><FaRegStar /></span>
                              </span>
                              <p className='mt-2'>Hi, I am Jubeda Parveen, I am a writer, I am interested in writing blogs</p>
                         </div>

                    </div>
                    <div className='text-right '>
                         <span>2 year ago</span>
                    </div>
               </div>
               <div className='border-b-2 border-amber-800/50 pb-4'>
                    <div className='flex flex-row justify-between gap-2 mt-4 '>
                         <div className='w-15 h-10 border rounded-full '>
                              <Image src={Logo} alt="" className='w-15 h-10 border-2 rounded-full' />
                         </div>
                         <div className=''>
                              <span className='flex justify-between'>
                                   <h2>Jubeda Parveen</h2>
                                   <span><FaRegStar /></span>
                              </span>
                              <p className='mt-2'>Hi, I am Jubeda Parveen, I am a writer, I am interested in writing blogs</p>
                         </div>

                    </div>
                    <div className='text-right '>
                         <span>2 year ago</span>
                    </div>
               </div>
               <div className='border-b-2 border-amber-800/20 pb-4'>
                    <div className='flex flex-row justify-between gap-2 mt-4 '>
                         <div className='w-15 h-10 border rounded-full '>
                              <Image src={Logo} alt="" className='w-15 h-10 border-2 rounded-full' />
                         </div>
                         <div className=''>
                              <span className='flex justify-between'>
                                   <h2>Jubeda Parveen</h2>
                                   <span><FaRegStar /></span>
                              </span>
                              <p className='mt-2'>Hi, I am Jubeda Parveen, I am a writer, I am interested in writing blogs</p>
                         </div>

                    </div>
                    <div className='text-right '>
                         <span>2 year ago</span>
                    </div>
               </div>
               <div className='border-b-2 border-amber-800/20 pb-4'>
                    <div className='flex flex-row justify-between gap-2 mt-4 '>
                         <div className='w-15 h-10 border rounded-full '>
                              <Image src={Logo} alt="" className='w-15 h-10 border-2 rounded-full' />
                         </div>
                         <div className=''>
                              <span className='flex justify-between'>
                                   <h2>Jubeda Parveen</h2>
                                   <span><FaRegStar /></span>
                              </span>
                              <p className='mt-2'>Hi, I am Jubeda Parveen, I am a writer, I am interested in writing blogs</p>
                         </div>

                    </div>
                    <div className='text-right '>
                         <span>2 year ago</span>
                    </div>
               </div>
          </div>
     )
}

export default UsersMessages