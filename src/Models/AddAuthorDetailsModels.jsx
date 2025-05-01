import axios from 'axios';
import React from 'react';
import { GiTireIronCross } from "react-icons/gi";
import Swal from 'sweetalert2';

const AddAuthorDetailsModels = ({ addAuthorDetailsModels, setAddAuthorDetailsModels }) => {

     const handleAddAuthorDetail = (e) => {
          e.preventDefault();
          axios.post(`${process.env.NEXT_PUBLIC_URL}admin-panel/authordetailpage/authordetail`, e.target)

               .then((response) => {
                    console.log(response.data);

                    let timerInterval;
                    Swal.fire({
                         title: "Author Details Sucessfully Added in Author Dtails Page!",
                         html: "Redirected to Author Dtails Page <b></b> milliseconds.",
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
          setAddAuthorDetailsModels(false);
     };


     return (
          <div className={`${addAuthorDetailsModels ? "block" : "hidden"} w-[40rem]  h-auto items-center justify-center fixed top-[1rem] left-[30rem]  z-10 p-4 rounded-sm bg-[#0E2A10] text-[#0E2A10] border border-white/20 `}>
               <div className='border border-gray-400 rounded-sm shadow-2xl p-4 bg-[#87a186]'>
                    <div className='w-full flex justify-between border-b border-gray-400 mb-4 pb-2'>
                         <div className=' '>
                              <h2 className='text-2xl font-bold text-center uppercase'>Add Author Details </h2>
                         </div>
                         <div className='w-8 h-8 rounded-full flex justify-center items-center text-white hover:bg-[#316334] bg-[#0E2A10]  font-bold' onClick={() => setAddAuthorDetailsModels(false)}>
                              <GiTireIronCross />
                         </div>
                    </div>
                    <form method='' className='w-full' onSubmit={handleAddAuthorDetail}>
                         <div>
                              <label className='px-1 uppercase'> Add Author Image</label>
                              <input type='file' name='thumbnail' placeholder='Add Blog Image Here .....' className='w-full file:bg-[#0E2A10] file:px-10 file:py-2 file:mr-6 file:text-[#87a186] rounded-md outline-none bg-[#2b572a]/30 text-black' />
                         </div>
                         <div className='my-2'>
                              <label className='px-1 uppercase'> Add Author Name</label>
                              <input type="text" name='authorname' className='bg-[#2b572a]/30 outline-0 w-full placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Add Author Name here' />
                         </div>
                         <div className='my-2'>
                              <label className='px-1 uppercase'> Add Author Address </label>
                              <textarea style={{ height: '4rem' }} type="text" name='authoraddress' className='bg-[#2b572a]/30 outline-0 w-full placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Add Address here' />
                         </div>
                         <div className='my-2'>
                              <label className='px-1 uppercase'> Add Author Email Id </label>
                              <input type="text" name='authoremail' className='bg-[#2b572a]/30 w-full placeholder:text-sm placeholder:text-gray-700 outline-0 text-start px-6 py-1 rounded-sm' placeholder='Add Email Id Here' />
                         </div>
                         <div className='my-2'>
                              <label className='px-1 uppercase'> Add Author Social Media Link </label>
                              <textarea style={{ height: '4rem' }} type="number" name='authormedialink' className='bg-[#2b572a]/30 w-full outline-0 placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Add Social Media Link Here' />
                         </div>
                         <div className='my-2'>
                              <label className='px-1 uppercase'> Add Author Number</label>
                              <input type="text" name='authornumber' className='bg-[#2b572a]/30 py-2 w-full placeholder:text-sm placeholder:text-gray-700 outline-0 text-start px-6 rounded-sm' placeholder='Add Number Here' />
                         </div>
                         <div className='mt-6 cursor-pointer bg-[#0E2A10] text-[#87a186] text-center py-2 rounded-full hover:bg-[#2b572a] border hover:border-[#0E2A10]  uppercase  tracking-widest'>
                              <button> Submit </button>
                         </div>
                    </form>
               </div>

          </div>
     )
}

export default AddAuthorDetailsModels