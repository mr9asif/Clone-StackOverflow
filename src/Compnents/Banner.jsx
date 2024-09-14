import React from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='w-full border flex justify-between items-center gap-2 bg-gray-100'>
            <div className='inline  w-[60%] p-5'>
             <h1 className='text-4xl font-bold my-3'>Every developer has a
             tab open to Stack Overflow.</h1>
              <p>For over 15 years we’ve been the Q&A platform of choice that millions of people visit every month to ask questions, learn, and share technical knowledge.

              </p>
            <div className='flex items-start justify-center gap-5'>
            <button className='text-white bg-blue-400 px-6 hover:bg-blue-500 border rounded-lg p-2'>Sign up</button>
             <div className='flex border rounded-md hover:bg-slate-100 p-2 items-center gap-1 px-4 text-blue-400'>
             <NavLink to='communities' className="">Visit Communities </NavLink> <FaAnglesRight />
             </div>
            </div>

            </div>

            <div>
             <img className='w-[80%]' src="/public/illo-home-hero.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;