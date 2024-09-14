import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-12 h-[70px] w-[99%] mx-auto shadow-sm'>
           <div className='flex items-center gap-2'>
             <img className='w-[30px]' src="/public/stack-overflow.svg" alt="" />
              <h1 className='text-xl '>stack<span className='font-extrabold'>Overflow</span></h1>
           </div>
           <div className='flex items-center gap-2'>
             <NavLink className="hover:bg-gray-100 p-2 rounded-lg" to='about'>About</NavLink>
             <NavLink className="hover:bg-gray-100 p-2 rounded-lg" to='products'>Products</NavLink>
             <NavLink className="hover:bg-gray-100 p-2 rounded-lg" to='overflow'>Overflow AI</NavLink>
           </div>
             
           <div className='flex items-center'>
            <label htmlFor="" className='border rounded-md flex items-center p-2 gap-3 w-[40vw] '>
            <IoSearchOutline />
            <input type="text" placeholder='Search ..' className='border-none outline-none' />
            </label>
           </div>

            <div className='flex items-center gap-4'>
               <button className='  border-black p-2 px-6 hover:bg-gray-200 rounded-md bg-gray-100 text-blue-400 '>Login</button>
               <button className='text-white bg-blue-400 px-6 hover:bg-blue-500 border rounded-lg p-2'>Sign up</button>
            </div>
            
        </div>
    );
};

export default Navbar;