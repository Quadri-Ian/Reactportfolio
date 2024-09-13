// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpinningCircle from '../components/spinningCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the specific icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import RotatingBrain from '../components/rotatingBrain';
import SpinningLogo from '../components/spinningLogo';


const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};


const Home = () => {
  return   <div className="overflow-hidden">
  <motion.div
  initial="initial"
  animate="in"
  exit="out"
  variants={pageVariants}
  transition={pageTransition}
  className='min-h-minus relative '
  >
          <div className=' lg:hidden'>
      <div className="flex md:hidden py-[22px] justify-center w-full">
      <SpinningLogo />

        </div>  
  <div className="lg:hidden absolute overflow-hidden right-[18%] md:right-[15%] -bottom-36 md:top-36 w-full ">

  <RotatingBrain />
  </div>

{/* name & intro mobile */}
<div className=''>
  <div className='absolute top-1/2 inset-1/2 md:top-[40%]'>

    <SpinningCircle  /> 
  </div>
  <div className='absolute m-auto top-[25%] mt-10 md:-top-12'>
<div className='lg:hidden md:text-md text-dwhite dark:text-amber-100 m-auto   flex text-center justify-center flex-col md:mt-28'>
              <p>Hey there! i'm</p>
              <h1 className='text-3xl md:text-4xl font-bold text-amber-100'> IAN </h1>
              <h1 className='text-3xl md:text-4xl font-bold text-amber-100 pb-2'> QUADRI<span className='text-3xl md:text-5xl text-yellow-500'>.</span></h1>
              {/* <p className='text-lightText dark:text-amber-100'>your friendly WEB<span> DEVELOPER </span></p> */}


            </div>

            <div className='text-sm md:text-[18px] px-4 lg:hidden  flex text-center justify-center flex-col text-dwhite dark:text-amber-100'>
              {/* <p>INTRODUCTION</p> */}
              <h2 className='text-dwhite dark:text-yellow-500 text-1xl md:text-1xl font-bold'>FRONT-END WEB DEVELOPER</h2>
              <p className=' w-1/2 md:w-1/3 m-auto'>Want to take a little tour of the amazing works i've completed over the years? Explore my Portfolio!</p>
            </div>

  </div>

        <div>
        <div className='md:hidden absolute w-full bottom-0 -left-2 text-lightText dark:text-amber-100'>
          <div className='grid grid-cols-2 gap-x-36 gap-y-12  w-full text-lg items-center text-center'>
        <Link to="/about" className="hover:text-yellow-500 underline decoration-fblack active:text-fblack active:decoration-yellow-500 ">About</Link>
        <Link to="/projects" className="hover:text-yellow-500 underline decoration-fblack active:text-fblack active:decoration-yellow-500 ">Projects</Link>
        <Link to="/blog" className="hover:text-yellow-500 underline decoration-fblack active:text-fblack active:decoration-yellow-500 ">Blog</Link>

        <Link to="mailto:donovyian@gmail.com" className="hover:text-yellow-500 underline decoration-fblack active:text-fblack active:decoration-yellow-500">Contact</Link>



          </div>

        </div>
      </div>

</div>

      </div>
  <div className="hidden md:flex w-full justify-center ">

    <div className='hidden  lg:flex   w-full '>
            {/* name div */}

            <div className=' text-lightText dark:text-yellow-500 space-y-2 absolute left-[18%] top-8'>
              <p>Hey there! i'm</p>
              <h1 className='text-6xl w-[80%] font-bold text-amber-100 dark:text-amber-100'> IAN QUADRI<span className='text-7xl text-yellow-500'>.</span></h1>
            </div>

            <div className="w-full  absolute -inset-36 mt-16  flex  justify-center -z-1">
  <RotatingBrain />
</div>
            

      {/* short intro */}
 <div className='text-lightText dark:text-amber-100 absolute w-[30%] right-14 bottom-6 '>
  <h2 className='text-amber-100 dark:text-yellow-500 text-2xl lg:text-5xl font-bold'>
    FRONT-END WEB DEVELOPER<span className='text-5xl text-lightText dark:text-amber-100'>.</span>
  </h2>
  <p className='dark:text-fblack text-sm'>
    Want to take a little tour of the amazing works I've completed over the years? Explore my <span className='text-amber-100 dark:text-yellow-500'><Link to="/projects">Portfolio!</Link></span>
  </p>

  <div className='flex text-yellow-500 space-x-2 text-md'>
            <h1>
                |
            </h1>
            <a
      href="https://x.com/name__is_IAN"
      target="_blank"
      rel="noopener noreferrer"
      className="text-logo-yellow"
    >
        <FontAwesomeIcon icon={faXTwitter} className='text-lightText dark:text-amber-100' />
    </a>

    <a
      href="mailto:donovyian@gmail.com"
      className="text-logo-yellow"
    >
        <FontAwesomeIcon icon={faEnvelope} className='text-red-600' />      
    </a>


        </div>
  </div>
          </div>
  </div>
<div className=''>

</div>

          </motion.div>
    
    </div>
};

export default Home;
