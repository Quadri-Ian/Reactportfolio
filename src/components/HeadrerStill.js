// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import SpinningLogoLarge from './spinningLogolarge';



 


const HeaderStill = () => {
  return (
    <header className="hidden md:flex  text-lightText dark:text-amber-100  pt-8  px-28 items-center bg-transparent">

<nav className="text-lightText dark:text-amber-100 container mx-auto flex flex-col justify-center items-center">

<div>
<div>
        <SpinningLogoLarge />
        </div>  
</div>

<div className='space-x-4 p-2'>
    <NavLink 
        to="/about" 
        className={({ isActive }) => 
            isActive ? "text-fblack" : "hover:text-yellow-500"
        }
    >
        About
    </NavLink>
    <span className='text-fblack space-x-2 text-md'>|</span>
    <NavLink 
        to="/projects" 
        className={({ isActive }) => 
            isActive ? "text-fblack" : "hover:text-yellow-500"
        }
    >
        Projects
    </NavLink>
    <span className='text-fblack space-x-2 text-md'>|</span>
    <NavLink 
        to="/blog" 
        className={({ isActive }) => 
            isActive ? "text-fblack" : "hover:text-yellow-500"
        }
    >
        Blog
    </NavLink>
    {/* <NavLink to="/contact" className="hover:text-yellow-500 active:text-fblack">Contact</NavLink> */}
</div>

</nav>


    </header>
  );
};

export default HeaderStill;

