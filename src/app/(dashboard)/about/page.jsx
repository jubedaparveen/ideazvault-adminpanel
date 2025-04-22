'use client'
import React, { useEffect, useState } from 'react'
import { BsEyeFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
// import Logo from '@/../public/images/logo.jpg'
import Image from 'next/image';
import AddAboutModels from '@/Models/AddAboutModels';
import EditAboutModels from '@/Models/EditAboutModels';
import axios from 'axios';
import Swal from 'sweetalert2';

const AboutPage = () => {

     const [addAboutModels, setAddAboutModels] = useState(false);
     const [editAboutModels, setEditAboutModels] = useState(false);
     const [viewAbout, setViewAbout] = useState([])
     const [filepath, setFilepath] = useState('');


     const handlefatchAboutPage = () => {
          axios.get(`${process.env.NEXT_PUBLIC_URL}admin-panel/aboutpage/viewaboutpage`)
               .then((response) => {
                    console.log(response.data);
                    setViewAbout(response.data.data)
                    setFilepath(response.data.filepath);
               })
               .catch((error) => {
                    console.log(error);
               });
     };

     useEffect(() => {
          handlefatchAboutPage();

          // console.log(process.env.NEXT_PUBLIC_URL)
     }, []);

     const handleSingleDelete = (id) => {
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
          }).then((result) => {
               if (result.isConfirmed) {
                    axios.delete(`${process.env.NEXT_PUBLIC_URL}admin-panel/aboutpage/delete/${id}`,)
                         .then((response) => {
                              console.log(response.data);
                              Swal.fire({
                                   title: "Deleted!",
                                   text: "Data has been deleted.",
                                   icon: "success"
                              });
                              handlefatchAboutPage();
                         })
                         .catch((error) => {
                              console.log(error);
                         })
               }
          });
     };

     return (
          <div className='p-4   '>
               <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>
                    <div className='flex justify-between items-center text-2xl border-b-2 border-[#87a186]/20 pb-4  '>
                         <div className='hover:text-[#0E2A10] '>
                              <h2> About Us</h2>
                         </div>
                         <div className='flex gap-4'>
                              <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer ' onClick={() => setAddAboutModels(true)}>
                                   <button className='cursor-pointer'>
                                        <IoMdAdd />
                                   </button>
                              </div>
                              <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
                                   <button className=' '><BsEyeFill /></button>

                              </div>
                              <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer ' onClick={() => setEditAboutModels(true)}>
                                   <button className=''><RiEdit2Fill /></button>
                              </div>
                              <div className='w-10 h-10 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-2 rounded-full cursor-pointer '>
                                   <button className=''><MdDeleteSweep /></button>
                              </div>
                         </div>
                    </div>
                    <div className='border-b-2 border-[#87a186]/20 py-4 w-full'>
                         <div className='w-full'>
                              <table className='w-full'>
                                   <thead>
                                        <tr>
                                             <th className='p-1 text-center w-[1%] border'>S.No</th>
                                             <th className='p-1 w-[10%] text-start border'>Logo Image</th>
                                             <th className='p-1 w-[20%] text-start border'>About IdeazVault</th>
                                             <th className='p-1 w-[20%] text-start border'>Our Vision  IdeazVault</th>
                                             <th className='p-1 w-[20%] text-start border'>Our Values IdeazVault</th>
                                             <th className='p-1 w-[10%] text-center border'> Action </th>

                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                        viewAbout.map((v, i) => (
                                             <tr key={i}>
                                                  <td className='p-1 border text-center font-bold' >{i + 1}
                                                  </td>
                                                  <td className='p-1 border text-center' >
                                                       <div className='px-2 text-center'>
                                                            <img src={filepath + v.thumbnail} alt='logo' width={300} height={300} />
                                                       </div>
                                                  </td>
                                                  <td className='p-2 border ' >
                                                            <p >{v.description}</p>
                                                  </td>
                                                  <td className='p-2 border ' >
                                                            <p >{v.ourvision}</p>
                                                  </td>
                                                  <td className='p-2 border ' >
                                                            <p >{v.ourvalues}</p>
                                                  </td>
                                                  <td className='p-2 border'>
                                                       <div className='flex flex-col md:flex-row gap-2  justify-center items-center  md:justify-start'>
                                                            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]'><BsEyeFill /></button>
                                                            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]' onClick={() => setEditAboutModels(true)}><RiEdit2Fill /></button>
                                                            <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] p-1 rounded-2xl hover:border-[#e0cbb0]' onClick={() =>{handleSingleDelete(v.id)}}>
                                                                 <MdDeleteSweep />
                                                            </button>
                                                            </div>
                                                       </td>

                                                  </tr>
                                             ))
                                        }

                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
               <AddAboutModels addAboutModels={addAboutModels} setAddAboutModels={setAddAboutModels} />
               <EditAboutModels editAboutModels={editAboutModels} setEditAboutModels={setEditAboutModels} />
          </div>
     )
}

export default AboutPage