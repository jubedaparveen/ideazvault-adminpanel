'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
// import Logo from '../../public/images/logo.jpg'
import { GiTireIronCross } from "react-icons/gi";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddAboutModels = ({ addAboutModels, setAddAboutModels }) => {

     const [imagePreview, setImagePreview] = useState(null);
     
     const router = useRouter();

     const handleImagePreview = (e) => {
          //this will give uploaded image file
          const imageFile = e.target.files[0];
          const imageUrl = URL.createObjectURL(imageFile);
          setImagePreview(imageUrl);
     };

     const handleaddAboutPage = (e) => {
          e.preventDefault();
          axios.post(`${process.env.NEXT_PUBLIC_URL}admin-panel/aboutpage/addaboutpage`, e.target)
               .then((response) => {
                    console.log(response.data);

                    let timerInterval;
                    Swal.fire({
                         title: "Content Successfully Added in About Page!",
                         html: "Redirected to About Page <b></b> milliseconds.",
                         timer: 2000,
                         timerProgressBar: true,
                         confirmButtonColor: "#3085d6",
                         didOpen: () => {
                              Swal.showLoading();
                              const timer = Swal.getPopup().querySelector("b");
                              timerInterval = setInterval(() => {
                                   timer.textContent = `${Swal.getTimerLeft()}`;
                              }, 100);
                         },
                         willClose: () => {
                              clearInterval(timerInterval);
                         }
                    }).then((result) => {
                         /* Read more about handling dismissals below */
                         if (result.dismiss === Swal.DismissReason.timer) {
                              // console.log("I was closed by the timer");
                              // router.push('/about')
                         }
                    });

               })
               .catch((error) => {
                    console.log(error);
               
               });
               setAddAboutModels(false);
               // router.push('/about')
     };

     

     return (
          <div className={`${addAboutModels ? "block" : "hidden"} w-[20rem] md:w-[40rem] h-28 md:h-auto items-center justify-center fixed top-0 md:top-[4rem] md:left-[30rem] left-0 z-10 p-4 rounded-sm bg-[#0E2A10] text-[#0E2A10] border border-white/20 `}>
               <div className='border border-gray-400 rounded-sm shadow-2xl p-4 bg-[#87a186]'>
                    <div className='w-full flex justify-between border-b border-gray-400 mb-4 pb-2'>
                         <div className=' '>
                              <h2 className='text-2xl font-bold text-center uppercase'>Add About IdeazVault.com </h2>
                         </div>
                         <div className='w-8 h-8 rounded-full flex justify-center items-center text-white hover:bg-[#316334] bg-[#0E2A10]  font-bold' onClick={() => setAddAboutModels(false)}>
                              <GiTireIronCross />
                         </div>
                    </div>

                    <form method='post'  onSubmit={handleaddAboutPage} className='w-full'>
                         <div className=''>
                              <label className='p-1 uppercase'>Logo Image</label>
                              <div className='w-full flex gap-6'>
                                   <div className='w-full basis-2/2'>
                                        <input type="file" name="thumbnail" className="w-full rounded-full file:mr-10 file:rounded-full file:border-0 file:bg-green-950 
                                   file:text-[#a2b8a1] border file:px-16 file:py-2 file:text-sm file:font-semibold hover:file:bg-[#2b572a]" onChange={handleImagePreview} />
                                   </div>
                                   <div className='basis-1/2  flex justify-center'>
                                        {
                                             imagePreview && (
                                                  <img src={imagePreview} className="w-20 mt-2" alt="" />
                                             )
                                        }
                                   </div>
                              </div>
                         </div>
                         <div className='my-3'>
                              <label className='px-1 uppercase'> Add About IdeazVault.com </label>
                              <textarea style={{ height: '2rem' }} name="description" type="text" className='bg-[#2b572a]/30 outline-0 w-full placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Add About IdeazVault.com  here' />
                         </div>
                         <div className='my-3'>
                              <label className='px-1 uppercase'> Our Vision IdeazVault.com </label>
                              <textarea style={{ height: '2rem' }} name="ourvision" type="text" className='bg-[#2b572a]/30 outline-0 w-full placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Add About IdeazVault.com  here' />
                         </div>
                         <div className='my-3'>
                              <label className='px-1 uppercase'> Our Values IdeazVault.com </label>
                              <textarea style={{ height: '2rem' }} name="ourvalues" type="text" className='bg-[#2b572a]/30 outline-0 w-full placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Add About IdeazVault.com  here' />
                         </div>

                         {/* //Our Vision */}
                         <div className='mt-6 cursor-pointer bg-[#0E2A10] text-[#87a186] text-center py-2 rounded-full hover:bg-[#2b572a] border hover:border-[#0E2A10]  uppercase  tracking-widest'  >
                              <button> Submit </button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default AddAboutModels