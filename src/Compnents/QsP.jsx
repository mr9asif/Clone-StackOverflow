import React, { useEffect, useState } from 'react';
import QS from './QS';

const QsP = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data); 
                // console.log(questions)// Set the fetched data to the state
            })
            .catch((err) => {
                console.log('Error fetching data:', err);
            });
    }, []);

     console.log('questions', questions)
    return (
        <div>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <QS question={question} key={question.id} /> // Pass the 'question' prop here
                ))
            ) : (
                <p>Loading...</p> // Display a loading message or handle empty state
            )}
        </div>
    );
};

export default QsP;
