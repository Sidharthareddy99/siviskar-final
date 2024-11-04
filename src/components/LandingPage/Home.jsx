import React, { useEffect } from 'react';
import AnimatedGradientText from "../AnimatedGradientText/AnimatedGradientText";
import { RainbowButtonDemo } from "../RainbowButton/RainbowButtonDemo";
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
const Home = () => {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('#Home', {
      opacity: 0,
      duration: 0.2,
      borderRadius:"100px",
    })
    tl.from('#Home',{
      scaleX:0.4,
      scaleY:0.1,
      translateY:"20vh",
      ease:"circ.out",
      duration:2.3,
  })
  tl.from('#nav a,#home-text,#saviskar span,#home-text p,#nav img,video,#Home img', {
    opacity: 0,
    delay: -0.5,
    stagger: 0.2,
    y: 100,
    duration: 1,
  }
  )
  })
  useEffect(() => {
    // Add a delay to allow animations to settle
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div
      id="Home"
      className="bg-gradient-to-b w-full bg-black h-screen text-white"
    >
      <video id='video'
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          autoPlay
        >
          <source
            src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/line-waves.webm?t=2024-03-19T22%3A09%3A07.266Z"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      <header className="relative bg-black bg-opacity-60">
        <div className='p-4 md:p-7'>
          <div className='flex justify-between'>
            <div id='nav'>
              <img
                className="w-auto h-10"
                src="https://i.ibb.co/qrhhX9Y/logo-semi.png"
                alt="Logo"
              />
            </div>
            <div id='nav' className='flex ml-3 gap-10'>
              <a href="#home" className='font-neue hidden md:block'>Home</a>
              <a href="#event" className='font-neue hidden md:block'>Events</a>
              <a href="#sponsers" className='font-neue hidden md:block'>Sponsors</a>
              <a href="#footer1" className='font-neue hidden md:block'>Contact Us</a>
            </div>
            <div id='nav' className='font-neue'>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSenj8k9HwvAsU2UPAhGg7-C-k_L1EnxeXyFwdXrBMKdX0BBTQ/viewform?usp=sf_link">
                <RainbowButtonDemo />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="relative overflow-hidden">
        <section className="relative flex justify-center items-center h-[88vh] bg-black bg-opacity-60">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div id='home-text' className="flex justify-center flex-col items-center">
                <div className="inline-flex cursor-pointer fade-in-text animated-gradient-text items-center rounded-lg bg-muted md:px-6 md:text-10xl font-bold">
                    <span className="font-neue mx-2 text-[20vw] md:text-[20vh]">
                      <span>S</span>
                      <span>a</span>
                      <span>v</span>
                      <span>i</span>
                      <span>s</span>
                      <span>k</span>
                      <span>a</span>
                      <span>r</span>
                    </span>
                </div>
                <div className="text-8xl inline-flex cursor-pointer fade-in-text animated-gradient-text items-center rounded-lg bg-muted md:px-6 md:text-10xl font-bold">
                    <span className="font-neue mx-2">
                      <span>2</span>
                      <span>k</span>
                      <span>2</span>
                      <span>4</span>
                    </span>
                </div>
                <p id='home-text' className="flex gap-5 font-neue md:mt-8 mt-8 text-2xl md:px-20 animate-para-text text-white sm:text-xl">
                  <p> Create </p>
                  <p>Innovate</p>
                  <p>Celebrate</p>
                  {/* Create &nbsp; Innovate &nbsp; Celebrate */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;