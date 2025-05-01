'use client'

import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';




const WritingSection = () => {

     const editor = useRef(null);
     const [content, setContent] = useState('');

     return (
          <div className='p-4   '>
               <div className='w-full p-6 text-[#87a186]/90  border bg-[#0E2A10]/80 border-[#87a186]/20 rounded-lg'>
                    <div className='flex justify-between border-b-2 border-[#87a186]/20 pb-4'>
                         <div className='md:text-2xl md:tracking-widest font-semibold'>Add Blogs</div>
                         <div className='dropdown'>
                              <button className='dropbtn'>Select Blog Category</button>
                         </div>
                    </div>

                    <div className='flex justify-end border-b-2 border-[#87a186]/20 py-4 gap-6 '>
                         {/* Publish  Means article save in dashboard  as wel as website with category*/}
                         <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-2xl'>Publish</button>
                         {/* Save Draft Means article save in dashboard */}
                         <button className='border border-[#87a186]/20 bg-[#87a186] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0] px-3 py-1 rounded-2xl'>Save Draft</button>
                         <div>
                         </div>
                    </div>

                   
                    <div className='border-b-2 border-[#87a186]/20 py-4'>
                         <div>
                              <div className='text-lg font-semibold mb-4'>Add Title</div>
                              <input type='text' placeholder='Add Title Here .....' className='w-full p-2 border border-[#87a186]/20 rounded-md outline-none bg-white/99 text-black' />
                         </div>
                         <div className=''>
                              <div className='text-lg font-semibold mb-4 mt-4'>Add Blog Description</div>
                              {/* <textarea style={{ height: '30rem' }} type="textarea" id="content" placeholder='Start Writing ........' className='w-full p-2 border border-[#87a186]/20 rounded-md outline-none bg-white/99 text-black' /> */}

                              <JoditEditor className='text-black'
                              ref={editor}
                              value={content}
                              // config={config}
                              // tabIndex={1} // tabIndex of textarea
                              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                              onChange={newContent => { }}/>
                         </div>
                    </div>
                    <div className='border-b-2 border-[#87a186]/20 py-4'>
                         <div>
                              <div className='text-lg font-semibold mb-4'>Add Tags</div>
                              <textarea style={{ height: '5rem' }} type='textarea' placeholder='Add Tags Here .....' className='w-full p-2 border border-[#87a186]/20 rounded-md outline-none bg-white/99 text-black' />
                         </div>
                         <div className='mt-4'>
                              <div className='text-lg font-semibold mb-4'>Add Meta Description</div>
                              <textarea style={{ height: '5rem' }} type='text' placeholder='Add Meta Description Here .....' className='w-full p-2 border border-[#87a186]/20 rounded-md outline-none bg-white/99 text-black' />
                         </div>
                         <div className='mt-4'>
                              <div className='text-lg font-semibold mb-4'>Add Meta Keywords</div>
                              <textarea style={{ height: '5rem' }} type='text' placeholder='Add Meta Keywords Here .....' className='w-full p-2 border border-[#87a186]/20 rounded-md outline-none bg-white/99 text-black' />
                         </div>
                    </div>
                    <div className='border-b-2 border-[#87a186]/20 py-4'>
                         <div>
                              <div className='text-lg font-semibold mb-4'>Add Blog Image</div>
                              <input type='file' placeholder='Add Blog Image Here .....' className='w-full file:bg-[#87a186] file:px-10 file:py-2 file:mr-6 rounded-md outline-none bg-white/99 text-black' />
                         </div>
                    </div>
                    <div className='border-b-2 border-[#87a186]/20 py-4'>
                         <div>
                              <div className='text-lg font-semibold mb-4'>Add Blog Video</div>
                              <input type='file' placeholder='Add Blog Video Here .....' className='w-full file:bg-[#87a186] file:px-10 file:py-2 file:mr-6 rounded-md outline-none bg-white/99 text-black' />
                         </div>
                    </div>
                    <div className='border-b-2 border-[#87a186]/20 py-4 flex flex-col gap-1'>
                         <span>Title Word Count : <span className='font-bold'>60</span></span>
                         <span>Word Count : <span className='font-bold'> 1560</span></span>
                    </div>
               </div>
          </div>
     )
}

export default WritingSection;