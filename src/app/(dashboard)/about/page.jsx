import React from 'react'
import { BsEyeFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const AboutPage = () => {
     return (
          <div className='p-4   '>
               <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>
                    <div className='flex justify-between items-center text-2xl border-b-2 border-[#87a186]/20 pb-4 hover:text-[#0E2A10] '>
                         <div className=' '>
                              <h2> About Us</h2>
                         </div>
                         <div className='flex gap-4'>
                              <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
                                   <button className='cursor-pointer'>
                                        <IoMdAdd />
                                   </button>
                              </div>
                              <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
                                   <button className=' '><BsEyeFill /></button>

                              </div>
                              <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
                                   <button className=''><RiEdit2Fill /></button>
                              </div>
                         </div>

                    </div>
                    <div className='border-b-2 border-[#87a186]/20 py-4 w-full'>
                         <div className='flex md:flex-row flex-col gap-4 '>
                              <div className='flex-1/3 border rounded-full border-[#87a186]/20 '>
                                   <img src="images/logoo.png" className='rounded-full ' />
                              </div>
                              <div className='flex-2/3 borde border-[#87a186]/20 px-4'>
                                   <p className='text-[#87a186] text-5xl uppercase tracking-widest first-letter:text-[#C41477]/90 font-bold '>About <span className='text-[#C41477]/90 font-bold'>U<span className='text-[#87a186]'>S</span></span></p>
                                   <p className='text-[#87a186] mt-5 text-lg text-justify first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-[#C41477]/90 first-line:tracking-widest first-line:uppercase '>We are a team of experienced professionals who are passionate about providing the best services to our clients. We have been in the industry for over 10 years and have helped many businesses grow. Our goal is to help you succeed and we will do everything we can to make that happen. Contact us today to learn more about how we can help you achieve your goals.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AboutPage