import React from 'react';
import { FaFileAlt, FaHome } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { ImUsers } from "react-icons/im";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdViewCompactAlt } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='w-[20%] px-4  flex flex-col  border-l border-r  my-5'>
             <div className='flex flex-col gap-1'>
             <NavLink to='/' className='flex items-center gap-1 hover:bg-slate-100 p-2 px-3 cursor-pointer'>
             <FaHome />
              <h1 className='font-normal' to="home" >Home</h1>
             </NavLink>
 
             <NavLink className='flex items-center gap-1 hover:bg-slate-100 p-2 px-3 cursor-pointer' to="questions">
             <RiQuestionnaireLine />
              <h1 className='font-normal' >Questions</h1>
             </NavLink>
 
             <div className='flex items-center gap-1 hover:bg-slate-100 p-2 mb-6 px-3 cursor-pointer'>
            <IoPricetagsSharp />
              <h1 className='font-normal'>Tags</h1>
             </div>
             </div>

                


               <div className='mt-1 gap-1'>
               <div className='flex items-center gap-1 hover:bg-slate-100 p-2 px-3 cursor-pointer'>
               <ImUsers />
                 <h1 className='font-normal'>Users</h1>
                </div>
               <div className='flex items-center gap-1 hover:bg-slate-100 p-2 px-3 cursor-pointer'>
               <MdViewCompactAlt />
                 <h1 className='font-normal'>Companies</h1>
                </div>
               </div>

               <div className='flex justify-between items-center px-4 mt-6'>
                 <h1 className='font-semibold cursor-pointer'>Labs</h1>
                 <HiMiniInformationCircle className='cursor-pointer' />
                </div>

                 <div>
                 <div className='flex items-center gap-1 hover:bg-slate-100 p-2 px-3 cursor-pointer'>
                 <FaFileAlt />
                   <h1 className='font-normal'>Jobs</h1>
                  </div>
                  <div className='flex items-center gap-1 hover:bg-slate-100 p-2 px-3 cursor-pointer'>
                  <GoCommentDiscussion />
                    <h1 className='font-normal'>Discussions</h1>
                   </div>
                 </div>
        </div>
    );
};

export default SideMenu;