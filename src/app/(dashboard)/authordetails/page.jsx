'use client'
import React, { useEffect, useState } from 'react'
import { BsEyeFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { GrAction } from "react-icons/gr";

import AddAuthorDetailsModels from '@/Models/AddAuthorDetailsModels';
import EditAuthorDetailsModels from '@/Models/EditAuthorDetailsModels';
import axios from 'axios';


const AuthorDetails = () => {

  const [addAuthorDetailsModels, setAddAuthorDetailsModels] = useState(false)
  const [editAuthorDetailsModels, setEditAuthorDetailsModels] = useState(false)

  const [viewAuthordetail, setViewAuthorDetail] = useState([])
  const [filepath, setFilepath] = useState('');

  const handleFatchAuthorDetail = () => {
    axios.get(`${process.env.NEXT_PUBLIC_URL}admin-panel/authordetailpage/viewauthoedetail`)
      .then((Response) => {
        console.log(Response.data)
        setViewAuthorDetail(Response.data.data)
        setFilepath(Response.data.filepath);
      })
      .catch((error) => { console.log(error) })
  };

  useEffect(() => { handleFatchAuthorDetail(); }, [])

  const handleEditAuthor = (id) =>{
    axios.get(`${process.env.NEXT_PUBLIC_URL}`)
  };

  const handleDeleteSingleData = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_URL}admin-panel/authordetailpage/deleteauthordetail/${id}`)
      .then((Response) => {
        console.log(Response.data);
        handleFatchAuthorDetail()
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <div className='p-4   '>
      <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>

        <div className='flex justify-between items-center text-2xl border-b-2 border-[#87a186]/20 pb-4  '>
          <div className=''>
            <h2>Author Details</h2>
          </div>
          <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer ' onClick={() => setAddAuthorDetailsModels(true)}>
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
                <th className='text-center p-1 border-r border-green-950 w-[10%]'>Author Name</th>
                <th className='text-start p-1 border-r border-green-950 w-[20%]'>Author Address</th>
                <th className='text-start p-1 border-r border-green-950 w-[30%]'>Email Id</th>
                <th className='text-start p-1 border-r border-green-950 w-[30%]'>Social Media</th>
                <th className='text-start p-1 border-r border-green-950 w-[10%]'>Contact Number</th>
                <th className='p-1 border-r border-green-950 w-[5%] '><GrAction size={20} className='mx-auto' /></th>
              </tr>
            </thead>
            <tbody >
              {
                viewAuthordetail.map((v, i) => (
                  <tr className=' border-b-2 border-[#87a186]/20 hover:bg-[#0E2A10] hover:text-[#e0cbb0] text-wrap' key={i}>
                    <td className='p-1 border-r border-l text-center text-wrap'>
                      <div className='w-10 h-10 rounded-full hover:bg-[#87a186]  hover:font-bold hover:text-[#0E2A10] hover:border-[#e0cbb0] '>
                        <img src={filepath + v.thumbnail} className='w-10 h-10 border border-gray-700 rounded-full' />
                      </div>
                    </td>
                    <td className='p-1 border-r text-center text-wrap'>{v.authorname}</td>
                    <td className='p-1 border-r text-start text-wrap'>{v.authoraddress}</td>
                    <td className='p-1 border-r text-start text-wrap '>{v.authoremail}</td>
                    <td className='p-1 border-r text-start text-wrap'>{v.authormedialink}</td>
                    <td className='p-1 border-r text-start text-wrap '>{v.authornumber}</td>
                    <td className='p-1 border-r text-center '>
                      <div className='flex flex-col  gap-1  justify-center items-center  xl:justify-start'>
                        {/* <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]'><BsEyeFill /></button> */}
                        <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]' onClick={() => setEditAuthorDetailsModels(true)}>
                          <RiEdit2Fill onClick={() =>{handleEditAuthor(v._id)}}/>
                        </button>
                        <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]'><MdDeleteSweep onClick={() => { handleDeleteSingleData(v._id) }} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              }

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
      <AddAuthorDetailsModels addAuthorDetailsModels={addAuthorDetailsModels} setAddAuthorDetailsModels={setAddAuthorDetailsModels} />
      <EditAuthorDetailsModels
        editAuthorDetailsModels={editAuthorDetailsModels} setEditAuthorDetailsModels={setEditAuthorDetailsModels} />
    </div>
  )
}

export default AuthorDetails