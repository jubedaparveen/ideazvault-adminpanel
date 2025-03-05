import Link from 'next/link';
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { GrBlog } from "react-icons/gr";
import { TbLogs } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import { GiRamProfile } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { HiLogout } from "react-icons/hi";
import Logo from '../../public/images/logo.jpg';
import Image from 'next/image';

const MenuItems = [
     {
          title: 'Menu',
          items: [
               { icon: <MdDashboard size={14} />, label: 'Dashboard', path: '/admin' },
               { icon: <GrBlog size={13} />, label: 'Blogs', path: '/blogs' },
               { icon: <TbLogs size={15} />, label: 'Tecnical Blogs', path: '/tecnicalblogs' },
               { icon: <AiOutlineOpenAI size={17} />, label: 'Tranding Topics', path: '/trandingtopics' },
          ]
     },
     {
          title: 'Others',
          items: [
               { icon: <GiRamProfile  size={17}/>, label: 'Profile', path: '/profile' },
               { icon: <AiTwotoneSetting  size={17}/>, label: 'Settings', path: '/settings' },
               { icon: <HiLogout  size={17}/>, label: 'Logout', path: '/logout' }
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
                         <div className=' border-gray-600 my-4' key={index}>
                              <h3 className='text-xl text-gray-500 my-4 border-b border-gray-700/50 uppercase tracking-widest hidden md:block'>{menu.title}</h3>
                              <div>
                                   <ul>
                                        {menu.items.map((item, index) => (
                                             <li className='my-3 text-sm uppercase hover:bg-[#87a186] rounded-md hover:font-bold hover:text-[#0E2A10] md:p-2 md:tracking-widest' key={index}>
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
               </div>
          </div>
     )
}

export default Sidebar