import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const AskQuestion = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    
    const submitQr = (e) => {
        e.preventDefault();  // Prevents form submission
        const question = { title, dis: value, tags };
        console.log(question);
        setTags[''];
        setTitle("");
        setValue("");
       
    }

    const handleTagsChange = (e) => {
        const inputTags = e.target.value.split(',').map(tag => tag.trim());  // Convert string to array of tags
        setTags(inputTags);
        
    }

    return (
        <div className='w-full px-8'>
            <h1 className='font-semibold text-2xl my-4'>Ask Public Questions</h1>
            <form onSubmit={submitQr}> {/* Form onSubmit is handled */}
                <label className='bg-slate-50 rounded-md p-2'>
                    <h1 className='font-bold text-xl'>Title</h1>
                    <input 
                        className='w-[50%] p-2 border rounded-md my-2' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        type="text" 
                        placeholder='Give a title' 
                    />
                </label>

                <label className='my-4 block'>
                    <h1 className='font-normal my-2'>What are the details for your problem?</h1>
                    <ReactQuill 
                        className='h-[150px]' 
                        theme="snow" 
                        value={value} 
                        onChange={setValue} 
                    />
                </label>

                <label className='bg-slate-50 rounded-md p-2 my-4'>
                    <h1 className='font-bold text-xl'>Tags</h1>
                    <input 
                        className='w-[50%] p-2 border rounded-md my-2' 
                        value={tags.join(', ')}  // Display tags as a comma-separated string
                        onChange={handleTagsChange} 
                        type="text" 
                        placeholder='Enter tags separated by commas' 
                    />
                </label>

                <button className='border p-2 rounded-md bg-blue-300 hover:bg-blue-500' type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AskQuestion;
