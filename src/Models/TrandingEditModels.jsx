import React from 'react'
import { GiTireIronCross } from "react-icons/gi";

const TrandingEditModels = ({TrandingEditModel, setTrandingEditModel}) => {
  return (
     <div className={`${TrandingEditModel ? "block" : "hidden"} w-[50rem]  h-auto items-center justify-center fixed top-[6rem] left-[30rem]  z-[999999999999] p-4 rounded-sm bg-[#0E2A10] text-[#0E2A10] border border-white/20 `}>
            <div className='border border-gray-400 rounded-sm shadow-2xl p-4 bg-[#87a186]'>
              <div className='w-full flex justify-between border-b border-gray-400 mb-4 pb-2'>
                <div className=' '>
                  <h2 className='text-2xl font-bold text-center uppercase'>Add Address </h2>
                </div>
                <div className='w-8 h-8 rounded-full flex justify-center items-center text-white hover:bg-[#316334] bg-[#0E2A10]  font-bold' onClick={() => setTrandingEditModel(false)}>
                  <GiTireIronCross />
                </div>
              </div>
              <form method='' className='w-full'>
                <div className=''>
                  <label className='px-1 uppercase'> Edit Blog Title </label>
                  <input  type="text" className='bg-[#2b572a]/30 outline-0 w-full placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Edit Blog Title here' />
                </div>
                <div className='my-3'>
                  <label className='px-1 uppercase'> Edit Blog Discription </label>
                  <textarea style={{height: '4rem'}} type="text" className='bg-[#2b572a]/30 w-full placeholder:text-sm placeholder:text-gray-700 outline-0 text-start px-6 py-1 rounded-sm' placeholder='Edit Blog Discription Here' />
                </div>
                <div className='my-3'>
                  <label className='px-1 uppercase'> Edit Blog Category </label>
                  <textarea style={{ height: '2rem' }} type="number" className='bg-[#2b572a]/30 w-full outline-0 placeholder:text-sm placeholder:text-gray-700 text-start px-6 py-1 rounded-sm' placeholder='Edit Blog Cetegory Here' />
                </div>
                <div className='my-3'>
                  <label className='px-1 uppercase'>Edit Blog Tags </label>
                  <textarea style={{height: '3rem'}} type="text" className='bg-[#2b572a]/30 py-2 w-full placeholder:text-sm placeholder:text-gray-700 outline-0 text-start px-6 rounded-sm' placeholder='Edit Blog Tags Here' />
                </div>
                <div className='mt-6 cursor-pointer bg-[#0E2A10] text-[#87a186] text-center py-2 rounded-full hover:bg-[#2b572a] border hover:border-[#0E2A10]  uppercase  tracking-widest'>
                  <button> Submit </button>
                </div>
              </form>
            </div>
    
          </div>
  )
}

export default TrandingEditModels