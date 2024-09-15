import React from 'react';
import Banner from './Banner';


const Home = () => {
    return (
        <div className='flex flex-col items-center'>
        <Banner></Banner>
        <div>
         <img src="/public/homeIMG.png" alt="" />
        </div>
         <div>
          <img src="/public/homeIMG2.png" alt="" />
         </div>

        
        </div>
    );
};

export default Home;