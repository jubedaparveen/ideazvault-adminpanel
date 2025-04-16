'use client'
import React, { useState } from 'react'
//Models
import ContactModel from '@/Models/ContactModel';
//Icons 
import { BsEyeFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import ContactEditModel from '@/Models/ContactEditModel';

const Contact = () => {

  const [ContactModelShow, setContactModelShow] = useState(false);
  const [ContactEditModelShow, setContactEditModelShow] = useState(false);

  return (
    <div className='p-4   '>
      <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>

        <div className='flex justify-between items-center text-2xl border-b-2 border-[#87a186]/20 pb-4  '>
          <div className=' hover:text-[#0E2A10]'>
            <h2> Contact Us</h2>
          </div>
          <div className='flex gap-4'>
            <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer ' onClick={() => setContactModelShow(true)}>
              <button className='cursor-pointer'>
                <IoMdAdd />
              </button>
            </div>
            <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer' >
              <button className=''><RiEdit2Fill /></button>
            </div>
          </div>
        </div>

        <div className='border-b-2 border-[#87a186]/20 py-4 w-full '>
          <table>
            <thead>
              <tr>
                <th className='text-start border p-1 w-[1%]'>S.No</th>
                <th className='text-start border p-1 w-[15%]'>Adress</th>
                <th className='text-start border p-1 w-[10%]'>Phone Number</th>
                <th className='text-start border p-1 w-[12%]'>Social Media Id</th>
                <th className='text-start border p-1 w-[10%]'>Email Id</th>
                <th className='text-start border p-1 w-[6%]'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-[#0E2A10]/60 '>
                <td className='p-1 border text-center'>1</td>
                <td className='p-1 border'>40, Diamond Colony DharNaka, Mhow
                  Pin: 453441
                  Dist: Indore
                  State: Madhya Pradesh
                  Country: India</td>
                <td className='p-1 border'>
                  +91 - 94066-80070
                </td>
                <td className='p-1 border'>
                  Lorem ipsum dolor sit amet consectetur
                </td>
                <td className='p-1 border'>
                  jubedaparveen@gmail.com
                </td>
                <td className='border p-1'>
                  <div className='flex gap-3 justify-center'>
                    <div className='w-6 h-6 text-center bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] rounded-full cursor-pointer' onClick={() => setContactModelShow(true)}>
                      <button className=''><RiEdit2Fill /></button>
                    </div> | <div className='w-6 h-6 text-center bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0]  rounded-full cursor-pointer' >
                      <button className=''><MdDeleteSweep /></button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>

        </div>
      </div>
      <ContactModel ContactModelShow={ContactModelShow} setContactModelShow={setContactModelShow} />
      <ContactEditModel ContactEditModelShow={ContactEditModelShow} setContactEditModelShow={setContactEditModelShow}/>
    </div>
  )
}

export default Contact