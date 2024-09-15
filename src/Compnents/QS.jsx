import React from 'react';
import { NavLink } from 'react-router-dom';

const QS = ({ question }) => { // Destructure the question prop correctly
    console.log('Props', question)
    if (!question) {
        return <p>No question data available</p>; // Handle case where question is undefined
    }

    const { id, title, description, tags } = question;

    return (
        <div className='flex items-start justify-center gap-6 border-t mt-3 border-b p-2'>
            <div className='flex flex-col items-end w-[15%]'>
                <h1><span>0</span> votes</h1>
                <h1><span>0</span> answered</h1>
                <h1><span>0</span> views</h1>
            </div>
            <div className='w-[80%] flex flex-col gap-3 items-start'>
                <NavLink to={`/answer/${id}`} className='text-xl font-bold cursor-pointer'>
                    {title}
                </NavLink>
                <h1 className='font-normal'>{description}</h1>
                <div className='flex items-center justify-between px-2 gap-16'>
                    <div className='flex items-center gap-3'>
                        {tags?.map((tag, index) => (
                            <div key={index} className='gap-3 cursor-pointer bg-gray-50 p-2 rounded-md'>
                                <h1>{tag}</h1>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-[30px] h-[30px] rounded-[50%]' src="/public/homeIMG.png" alt="" />
                        <h1 className='font-semibold'>UserName</h1>
                        <p className='text-[14px] pl-5'>TimeSpan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QS;
