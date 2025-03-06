import React from 'react'
import { BsEyeFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const AuthorDetails = () => {
  return (
    <div className='p-4   '>
      <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>

        <div className='flex justify-between items-center text-2xl border-b-2 border-[#87a186]/20 pb-4 hover:text-[#0E2A10] '>
          <div className=' '>
            <h2>Author Details</h2>
          </div>
          <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
            <button className='cursor-pointer'>
              <IoMdAdd />
            </button>
          </div>
        </div>

        <div className='border-b-2 border-[#87a186]/20 py-4 w-full '>
          <table className=' table-fixed w-full'>
            <thead className='bg-[#87a186] text-[#0E2A10]'>
              <tr className='uppercase '>
                <th className='text-start p-1 border-r border-l border-green-950 w-[5%]'>Pic</th>
                <th className='text-start p-1 border-r border-green-950 w-[15%]'>Author Name</th>
                <th className='text-start p-1 border-r border-green-950 w-[20%]'>Author Address</th>
                <th className='text-start p-1 border-r border-green-950 w-[20%]'>Email Id</th>
                <th className='text-start p-1 border-r border-green-950 w-[20%]'>Social Media</th>
                <th className='text-start p-1 border-r border-green-950 w-[10%]'>Contact Number</th>
                <th className='text-start p-1 border-r border-green-950 w-[10%]'>Actions</th>
              </tr>
            </thead>
            <tbody >
              <tr className=' border-b-2 border-[#87a186]/20 hover:bg-[#0E2A10] hover:text-[#e0cbb0]'>
                <td className='p-1 border-r border-l text-center '>
                  <div className='w-10 h-10 rounded-full hover:bg-[#87a186]  hover:font-bold hover:text-[#0E2A10] hover:border-[#e0cbb0] '>
                    <img src="images/jubedapic.png" className='w-10 h-10 border border-gray-700 rounded-full' />
                  </div>
                </td>
                <td className='p-1 border-r text-start '>Jubeda Parveen</td>
                <td className='p-1 border-r text-start '>40 Diamond Cloony Dhar Naka <span> city: Mhow </span> <span>Dist: Indore</span> <span>Pin: 453441</span></td>
                <td className='p-1 border-r text-start '>Jubedaparveeh@gamil.com</td>
                <td className='p-1 border-r text-start '>Tags</td>
                <td className='p-1 border-r text-start '>9406680070</td>
                <td className='p-1 border-r text-center '>
                  <div className='flex flex-col md:flex-row gap-2  justify-center items-center  md:justify-start'>
                    <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]'><BsEyeFill /></button>
                    <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]'><RiEdit2Fill /></button>
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
    </div>
  )
}

export default AuthorDetails