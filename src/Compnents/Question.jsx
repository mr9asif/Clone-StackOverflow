import React from 'react';
import QS from './QS';
import QsP from './QsP';
import QuestionHeading from './QuestionHeading';


const Question = () => {
    return (
        <div className='w-[70%] mx-auto my-4 px-12 '>
           <QuestionHeading></QuestionHeading>
           <QsP></QsP>
           <QS></QS>
          
        </div>
    );
};

export default Question;