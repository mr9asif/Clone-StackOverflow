import React from 'react';
import { IoFilter } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const QuestionHeading = () => {
    return (
        <div>
        <div className='flex justify-between items-center my-2 px-6'>
        <h1 className='font-semibold text-2xl '>All Questions</h1>
          <NavLink to='/askquestion' className='font-semibold text-white bg-blue-400 p-3 hover:bg-blue-500 border rounded-lg cursor-pointer'>Ask Question</NavLink>
       </div>

       <div className='flex items-center justify-between'>
          <div>
           <h1><span>0</span> Questions</h1>
          </div>
          <div className='flex items-center justify-center gap-2  border rounded-sm p-2'>
            <button className='font-normal hover:bg-slate-100  rounded-md p-2'>Newest</button>
            <button className='font-normal hover:bg-slate-100  rounded-md p-2'>Active</button>
            <button className='font-normal hover:bg-slate-100  rounded-md p-2'>UnAnswered</button>
            <button className='font-normal hover:bg-slate-100  rounded-md p-2'>Score</button>
            <button className='flex items-center gap-1 border p-2 hover:bg-slate-100 rounded-md'>
            <IoFilter />
            Filter
            </button>
          </div>
       </div>
        </div>
    );
};

export default QuestionHeading;