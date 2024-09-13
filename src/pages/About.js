import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUser, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SkillIcons from '../components/skillIcons';
import SpinningLogo from '../components/spinningLogo';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Stagger the animation of each card
      duration: 0.9,
      ease: "easeInOut",
    },
  }),
};

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <nav className="flex md:hidden justify-between items-center p-6 space-x-14 text-amber-100">
        <div>
          <SpinningLogo />
        </div>
        <div className="space-x-4 pr-6">
          <Link to="/projects" className="hover:text-yellow-500">Projects</Link>
          <Link to="/blog" className="hover:text-yellow-500">Blog</Link>
        </div>
      </nav>

      <div className="text-sm text-lightText dark:text-amber-100 md:text-lg lg:text-2xl xl:text-3xl p-4 mt-24 md:mt-0 xl:pt-4">
        <p className="text-sm text-fblack text-center">About</p>
        <h3 className="underline underline-offset-4 decoration-yellow-100 dark:decoration-yellow-500 text-center">
          A little about <span className="text-yellow-100 dark:text-yellow-500 text-2xl no-underline">ME</span>
        </h3>
        <p className="text-center md:px-8 lg:w-[90%] xl:w-[85%] m-auto">
        Hello! I'm Ian, a Frontend Web Developer with over 4 years of experience. 
        I've worked with a variety of companies and individuals, both as a 
        freelancer and as part of a team. I'm often chosen for my ability to 
        deliver pixel-perfect, user-friendly web experiences, but what truly 
        sets me apart is my approach to problem-solving. It doesn't matter if 
        the solution is like finding a needle in a haystack—I’ll be there with 
        a magnet to get it done. The question
         isn't "Is it possible?" but rather "How can we make it happen?" Let's chat 
         about the project or role you have in mind.
          <span className=' text-fblack space-x-2 text-md'>| <a
            href="mailto:donovyian@gmail.com"
            className="text-logo-yellow"
          >
            <Link to="mailto:donovyian@gmail.com" className="text-yellow-500 dark:text-500 hover:text-fblack active:text-fblack">Send a mail!</Link>
          </a></span>
        </p>
      </div>

{/* Card divs */}
<div className="grid grid-cols-2 gap-y-2 w-full m-auto md:flex justify-evenly pb-4 pt-10 md:pt-10 lg:absolute bottom-12 xl:bottom-16 ">
  {[
    { icon: faCode, title: "Web-Dev", linkText: "4+ years" },
    { icon: faUser, title: "CV", linkText: "Assess", downloadLink: "/ian_quadri_cv.pdf" },
    {
      icon: faMagnifyingGlassChart,
      title: "Skillset",
      linkText: "View",
      skills: ["Javascript", "React", "WordPress", "SEO", "Python", "Database", "Coding", "Github", "PHP", "Digital Marketing"],
    },
    { icon: faGithub, title: "Github", linkText: "Repositories", link: "https://github.com/Quadri-Ian" },
  ].map((card, i) => (
    <motion.div
      key={i}
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="text-sm text-amber-100 text-center"
    >
      {card.skills ? (
        <div className="flip-card hover:shadow-fblack hover:shadow-lg dark:hover:shadow-yellow-500 w-36 shadow-sm shadow-fblack text-lightText dark:text-amber-100 h-36 md:h-48 md:w-40 lg:w-60 lg:h-64 m-auto" onClick={handleFlip}>
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-front rounded-lg pt-[85px] flex flex-col items-center justify-center p-6">
              <FontAwesomeIcon icon={card.icon} className="text-2xl text-yellow-100 dark:text-fblack lg:text-6xl lg:pb-6" />
              <p>{card.title}</p>
              <p className='underline underline-offset-4 decoration-yellow-100 dark:decoration-yellow-500 '>{card.linkText}</p>
            </div>
            <div className="flip-card-back rounded-lg flex flex-col items-center  justify-center p-6">
              <SkillIcons skills={card.skills} />
            </div>
          </div>
        </div>
      ) : card.downloadLink ? (
        <a href={card.downloadLink} download className="  ">
          <div className="hover:shadow-fblack hover:shadow-lg dark:hover:shadow-yellow-500 w-36 shadow-sm shadow-fblack text-lightText dark:text-amber-100 h-36 md:h-48 md:w-40 lg:w-60 lg:h-64 m-auto card text-center pt-12 p-6 md:pt-24 rounded-lg">
            <FontAwesomeIcon icon={card.icon} className="text-2xl text-yellow-100 dark:text-fblack  lg:text-6xl lg:pb-6" />
            <p>{card.title}</p>
            <p className=' underline underline-offset-4 decoration-yellow-100 dark:decoration-yellow-500 '>{card.linkText}</p>
          </div>
        </a>
      ) : card.link ? (
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          <div className="hover:shadow-fblack hover:shadow-lg dark:hover:shadow-yellow-500 w-36 shadow-sm shadow-fblack text-lightText dark:text-amber-100 h-36 md:h-48 md:w-40 lg:w-60 lg:h-64 m-auto card text-center pt-12 p-6 md:pt-24 rounded-lg">
            <FontAwesomeIcon icon={card.icon} className="text-2xl text-yellow-100 dark:text-fblack lg:text-6xl lg:pb-6" />
            <p>{card.title}</p>
            <p className="underline underline-offset-4 decoration-yellow-100 dark:decoration-yellow-500">{card.linkText}</p>
          </div>
        </a>
      ) : (
        <div className="hover:shadow-fblack hover:shadow-lg dark:hover:shadow-yellow-500 w-36 shadow-sm shadow-fblack text-lightText dark:text-amber-100 h-36 md:h-48 md:w-40 lg:w-60 lg:h-64 m-auto card text-center pt-12 p-6 md:pt-24 rounded-lg">
          <FontAwesomeIcon icon={card.icon} className="text-2xl text-yellow-100 dark:text-fblack lg:text-6xl lg:pb-6" />
          <p>{card.title}</p>
          <Link className="text-tlightText dark:text-amber-100 underline underline-offset-4 decoration-yellow-100 dark:decoration-yellow-500" to="/projects">
            <p>{card.linkText}</p>
          </Link>
        </div>
      )}
    </motion.div>
  ))}
</div>

    </motion.div>
  );
};

export default About;
