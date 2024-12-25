import React from 'react';
import { AiOutlineSearch} from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { CgOptions } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { IoIosHeart } from 'react-icons/io';
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";



export default function Header() {
  return (
    <div className='w-full bg-white  h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>
        <div className="input relative w-full md:w-auto">
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
         
          <div className="relative w-full md:w-[492px] accent-inherit-50 hidden sm:hidden md:hidden lg:block">
  <input 
    type="text" 
    title="search" 
    placeholder="Say something here" 
    className="border-2 border-[#e7eef6] w-full h-[44px] rounded-full p-2 pl-10 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 "
  />
  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg hidden lg:block" />
  <CgOptions className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6" />
</div>





        </div>
      </div>
      <div className="icons flex items-center gap-4">
        <IoIosHeart className="text-gray-500 cursor-pointer" size={28} />
        <IoIosNotifications className="text-gray-500 cursor-pointer" size={28} />
        <IoSettings  className="text-gray-500 cursor-pointer" size={28} />
        <MdAccountCircle className="text-gray-500 cursor-pointer" size={28} />

      </div>
    </div>
  );
}
