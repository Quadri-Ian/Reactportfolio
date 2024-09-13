// src/pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import SpinBlog from '../components/spinBLog.js';

const Blog = () => {
  return (
    <div className="min-h-screen bg-cwhite pt-3">
      {/* Custom Header for Blog Page */}
      <header className="bg-dwhite text-white p-6">
      <nav className="text-yellow-500 container mx-auto flex flex-col justify-center items-center">

        <div>
        <Link className='text-black' to="/">
        <SpinBlog />
      </Link>
        </div>

        <div className='space-x-4'>

<Link to="/about" className="hover:text-yellow-500">About</Link>
<Link to="/projects" className="hover:text-yellow-500">Projects</Link>
{/* <Link to="/contact" className="hover:text-yellow-500">Contact</Link> */}
</div>

      </nav>
      </header>

      {/* Blog Content */}
      <main className="flex justify-center items-center text-black mt-[60%] md:mt-[15%]">
          <h1
      className="text-4xl font-bold mb-8"
      style={{
        textShadow: '4px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      Coming soon
    </h1>

        {/* More blog content here */}
      </main>

      {/* Custom Footer for Blog Page */}
      {/* <footer className="bg-cwhite text-black p-4 text-center absolute bottom-0 w-full">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </footer> */}
    </div>
  );
};

export default Blog;
