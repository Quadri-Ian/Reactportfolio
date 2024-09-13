import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const SpinningCircle = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',  // Adjust size as needed
        height: '300px', // Adjust size as needed
        marginTop: '-150px',  // Offset to perfectly center
        marginLeft: '-150px', // Offset to perfectly center
        borderRadius: '50%',  // Make it a circle
        background: 'conic-gradient(#0e0c0a, #7f7f7f40)',  // Two-color gradient
      }}

    >
      {/* Optional: Add content or leave it empty */}
      <div className=' m-auto top-[35%] mt-10 md:-top-12'>
<div className='lg:hidden md:text-md text-dwhite dark:text-amber-100 m-auto   flex text-center justify-center flex-col md:mt-28'>
              <p>Hey there! i'm</p>
              <h1 className='text-3xl md:text-4xl font-bold text-amber-100'> IAN </h1>
              <h1 className='text-3xl md:text-4xl font-bold text-amber-100 pb-2'> QUADRI<span className='text-3xl md:text-5xl text-yellow-500'>.</span></h1>
              {/* <p className='text-lightText dark:text-amber-100'>your friendly WEB<span> DEVELOPER </span></p> */}


            </div>

            <div className='text-sm md:text-[18px] px-4 lg:hidden  flex text-center justify-center flex-col text-dwhite dark:text-amber-100'>
              {/* <p>INTRODUCTION</p> */}
              <h2 className='text-dwhite dark:text-yellow-500 text-1xl md:text-1xl font-bold'>FRONT-END WEB DEVELOPER</h2>
              <p className=' w-[70%] md:w-1/3 m-auto'>Want to take a little tour of the amazing works i've completed over the years? Explore my <span className='text-amber-100 dark:text-yellow-500'><Link to="/projects">Portfolio!</Link></span></p>
            </div>

  </div>
    </motion.div>
  );
};

export default SpinningCircle;
