import React from 'react';

const Footer = () => {
  return (
    <footer 
    id='footer-tech'
    className='bg-[#bbbbbb] w-full h-[100vh] p-8'>
      <div className='flex flex-col justify-between h-full'>
        <nav>
          <ul className='space-y-4'>
            <li><a href="#tech-home" className='text-4xl'>Home</a></li>
            <li><a href="#events-tech" className='text-4xl'>Events</a></li>
            <li><a href="mailto:knikhilgoud2004@gmail.com" className='text-4xl'>Contact Us</a></li>
          </ul>
        </nav>
        <div className='flex flex-col'>
          <p className='text-[13vw]'>Saviskar</p>
          <h1 className='text-9xl'>2k24</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
