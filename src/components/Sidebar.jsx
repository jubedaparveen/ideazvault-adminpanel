import Link from 'next/link';
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { GrBlog } from "react-icons/gr";
import { TbLogs } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import { GiRamProfile } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { HiLogout } from "react-icons/hi";
import { TfiWrite } from "react-icons/tfi";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaHandsHelping } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import Logo from '../../public/images/logo.jpg';
import Image from 'next/image';

const MenuItems = [
     {
          title: 'Menu',
          items: [
               { icon: <MdDashboard size={14} />, label: 'Dashboard', path: '/admin' },
               { icon: <LiaUserEditSolid size={18} />, label: 'Author Details', path: '/authordetails' },
               { icon: <TfiWrite size={13} />, label: 'WritingSection', path: '/writingsection' },
               { icon: <GrBlog size={13} />, label: 'Blogs', path: '/blogs' },
               { icon: <TbLogs size={15} />, label: 'Tecnical Blogs', path: '/tecnicalblogs' },
               { icon: <AiOutlineOpenAI size={17} />, label: 'Tranding Topics', path: '/trandingtopics' },
          ]
     },
     {
          title: 'Others',
          items: [
               { icon: <GiRamProfile  size={15}/>, label: 'Profile', path: '/profile' },
               { icon: <AiTwotoneSetting  size={15}/>, label: 'Settings', path: '/settings' },
              
          ]
     },
     {
          title: 'Support',
          items: [
               { icon: <FaHandsHelping  size={15}/>, label: 'Help', path: '/help' },
               { icon: <RiContactsFill  size={15}/>, label: 'Contact Us', path: '/contact' }
          ]
     },
     {
          title: 'Logout',
          items: [
              
              
          ]
     }
];

const Sidebar = () => {
     return (
          <div>
               <div className='rounded-full flex md:justify-start justify-center items-center '>
                    <Image src={Logo} alt="" className='w-[12rem] rounded-lg'/>
               </div>
               <div className="border-t border-gray-700/50 mt-2">
                    {MenuItems.map((menu, index) => (
                         <div className=' border-gray-600' key={index}>
                              <h3 className='text-xl text-gray-500 my-2 border-b border-gray-700/50 uppercase tracking-widest hidden md:block'>{menu.title}</h3>
                              <div>
                                   <ul>
                                        {menu.items.map((item, index) => (
                                             <li className=' text-sm uppercase hover:bg-[#87a186] rounded-md hover:font-bold hover:text-[#0E2A10] md:p-[.4rem] md:tracking-widest' key={index}>
                                                  <Link href={item.path}>
                                                  <div className='flex'>
                                                       <span className='md:me-4 mt-1 hover:font-bold'>{item.icon}</span>
                                                       <span className='hidden md:block'>{item.label}</span>
                                                  </div>
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </div>
                    ))}
                    <div className='text-sm  hover:bg-[#87a186] rounded-md hover:font-bold hover:text-[#0E2A10] md:p-[.4rem] md:tracking-widest cursor-pointer'>
                         <button className='flex gap-2 cursor-pointer'> <HiLogout className='mt-1'  size={17}/> <span className='uppercase '>Logout</span></button>
                    </div>
               </div>
          </div>
     )
}

export default Sidebar