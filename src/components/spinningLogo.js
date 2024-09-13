import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SpinningLogo = () => {
  return (
    <motion.div

      animate={{ rotateY: 360 }}
      transition={{
        repeat: Infinity,  // Loop the animation infinitely
        duration: 10,       // Adjust duration for faster/slower spin
        ease: 'linear',    // Smooth, consistent spinning
      }}
    >
        <div>
        <Link to="/" className=" text-1xl text-amber-100 grayscale  grayscale-6 hover:text-yellow-500 font-bold ">IQ</Link>
        <span className='text-yellow-500 text-2xl grayscale-0'>.</span>
        </div>   
        </motion.div>
  );
};

export default SpinningLogo;
