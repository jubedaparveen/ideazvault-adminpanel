'use client'
import React, { useState } from 'react'
import { BsEyeFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import TrandingEditModels from '@/Models/TrandingEditModels';

const TrandingTopics = () => {

  const [TrandingEditModel, setTrandingEditModel] = useState(false)
  return (
    <div className='p-4   '>
      <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>
        <div className='text-2xl border-b-2 border-[#87a186]/20 pb-4 '>
          <h2>Tranding Topics</h2>
        </div>
        <div className='border-b-2 border-[#87a186]/20 py-4 w-full '>
          <table className=' table-fixed w-full'>
            <thead className='bg-[#87a186] text-[#0E2A10]'>
              <tr className='uppercase '>
                <th className='text-start p-1 border-r border-l border-green-950 w-[5%]'>S.No</th>
                <th className='text-start p-1 border-r border-green-950 w-[15%]'>Blog Title</th>
                <th className='text-start p-1 border-r border-green-950 w-[30%]'>Blogs Description</th>
                <th className='text-start p-1 border-r border-green-950 w-[10%]'>Category</th>
                <th className='text-start p-1 border-r border-green-950 w-[10%]'>Tags</th>
                <th className='text-start p-1 border-r border-green-950 w-[20%]'>Meta Description</th>
                <th className='text-start p-1 border-r border-green-950 w-[10%]'>Actions</th>
              </tr>
            </thead>
            <tbody >

              <tr className=' border-b-2 border-[#87a186]/20 hover:bg-[#0E2A10] hover:text-[#e0cbb0]'>
                <td className='p-1 border-r border-l text-center '>1</td>
                <td className='p-1 border-r text-start '>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className='p-1 border-r text-start '>Blogs Description</td>
                <td className='p-1 border-r text-start '>Category</td>
                <td className='p-1 border-r text-start '>Tags</td>
                <td className='p-1 border-r text-start '>Meta Description</td>
                <td className='p-1 border-r text-center '>
                  <div className='flex flex-col md:flex-row gap-2  justify-center items-center  md:justify-start'>
                    <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]'><BsEyeFill /></button>
                    <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]' onClick={()=> setTrandingEditModel(true)}><RiEdit2Fill /></button>
                    <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]'><MdDeleteSweep /></button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className='flex justify-end flex-wrap border-b-2 border-[#87a186]/20 p-2'>
          <div className='flex  gap-2 '>
            <button className='border border-[#87a186]/20 bg-[#1d601a] text-[#e0cbb0]  hover:bg-[#0E2A10] hover:text-[#e0cbb0]  p-1 rounded-sm font-extrabold text-lg'>{"<"}</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>1</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>2</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>3</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>4</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>5</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>6</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>7</button>
            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-lg'>8</button>
            <button className='border border-[#87a186]/20 bg-[#1d601a] text-[#e0cbb0]  hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-sm  font-extrabold text-lg '>{">"}</button>

            <div>
            </div>
          </div>
        </div>
      </div>
      <TrandingEditModels TrandingEditModel={TrandingEditModel } setTrandingEditModel={ setTrandingEditModel}/>
    </div>
  )
}

export default TrandingTopics