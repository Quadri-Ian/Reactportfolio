// src/pages/Projects.js
import React from 'react';
// import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpinningLogo from '../components/spinningLogo';

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     x: "-100vw",
//   },
//   in: {
//     opacity: 1,
//     x: 0,
//   },
//   out: {
//     opacity: 0,
//     x: "100vw",
//     y: 40,
//   },
// };

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.4,
// };


const Projects = () => {
  return (
  //   <div className="flex justify-evenly ">
  //   {projectsData.map((project) => (
  //     <div key={project.id} className="">
  //       <img src={project.image} alt={project.name} className="w-full h-96 grayscale grayscale-6 object-cover rounded-md" />
  //       <h3 className="text-lg font-semibold mt-4">{project.name}</h3>
  //       <a href={project.link} className="text-blue-500 mt-2 inline-block">
  //         View Project
  //       </a>
  //     </div>
  //   ))}
  // </div>
  <motion.div
  className="box"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
> 
<nav className="flex md:hidden justify-between items-center p-6 space-x-14 text-amber-100">
<div>
        <SpinningLogo />
        </div>

  <div className='space-x-4 pr-6'>

          <Link to="/about" className="hover:text-yellow-500">About</Link>
          <Link to="/blog" className="hover:text-yellow-500">Blog</Link>
          {/* <Link to="/contact" className="hover:text-yellow-500">Contact</Link> */}
  </div>
        </nav>
        <div className='mt-14 md:mt-0 lg:mt-28'>

         <p className='text-sm text-fblack text-center pb-4'>Featured projects</p>

         <div className="hidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-4 gap-4 h-[70vh] lg:h-[32rem] xl:h-[70vh] overflow-y-auto">
  {projectsData.map((project, index) => (
    <div
      key={project.id}
      className="group relative transform transition duration-300 hover:scale-105"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-96 grayscale grayscale-6 object-cover rounded-md transition duration-300 ease-in-out group-hover:grayscale-0 group-hover:shadow-lg"
      />
      <h3 className="md:text-lg font-semibold uppercase mt-4 dark:text-fblack px-4 transition duration-300 group-hover:text-yellow-500">
        {project.name}
      </h3>
      <a
        href={project.link}
        className="text-sm px-4 text-amber-100 dark:text-yellow-500 md:mt-2 inline-block transition duration-300 group-hover:text-yellow-300"
      >
        View Project
      </a>
    </div>
  ))}
</div>


        </div>
    </motion.div>
  );
};

export default Projects;
