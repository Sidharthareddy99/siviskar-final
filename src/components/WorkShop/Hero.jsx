import React from 'react'
import { ShimmerButtonDemo } from '../ShimmerButton/ShimmerButtonDemo'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <div 
    id='workshop-home'
    class="bg-black h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zPj1s3d/Home-page-Workshop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
    <header class="bg-opacity-30">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex">
                    <img
                        className="w-auto h-10"
                        src="https://i.ibb.co/pfZ3yc5/logo.png"
                        alt=""
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer' }}
              />
                    </a>
                </div>
               <div className="ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#events-workshop" title="" className="text-base hidden md:block font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Events </a>
              <a href="#footer-workshop" title="" className="text-base hidden md:block font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Contact us </a>
              <div className="w-px h-5 bg-black/20"></div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSenj8k9HwvAsU2UPAhGg7-C-k_L1EnxeXyFwdXrBMKdX0BBTQ/viewform?usp=sf_link" title="" className="inline-flex items-center justify-center text-base font-semibold text-white  hover:bg-black hover:text-white transition-all duration-200 focus:bg-black rounded-xl focus:text-white" role="button"> <ShimmerButtonDemo/> </a>
            </div>
            </div>  
        </div>
    </header>
    <section class="bg-[#000000] bg-opacity-30 py-3 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl md:py-20 py-5">
            <div class="grid items-center grid-cols-1 gap-12 text-white lg:grid-cols-2">
                <div>
                    {/* <p class="text-base font-semibold tracking-wider text-blue-600 uppercase">Attend WorkShops To Gain Skills</p> */}
                    <h1 class="mt-2 text-4xl font-bold lg:mt-8 sm:text-6xl xl:text-8xl">WORKSHOPS</h1>
                    <p class="mt-4 text-baslg:mt-8 text-sm sm:text-xl">The Workshops at Saviskar offer hands-on learning experiences led by industry experts, covering trending topics like Web Designing, IoT, AR/VR, and Automation. These sessions provide participants with practical skills and insights, bridging the gap between theoretical knowledge and real-world applications
</p>

                    <a href="#events-workshop" title="" class="inline-flex items-center px-4 py-2 mt-4 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-[#FF3A32] to-[#FE8B4B] rounded-full lg:mt-16" role="button">
                        Explore Now
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                    {/* <p class="mt-5 text-gray-600">Already joined us? <a href="#" title="" class="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
                </div>

               <div class="w-full">
                    <img
                        class="w-full h-[30vh] md:h-[50vh] object-cover"
                        src="https://i.ibb.co/27X6M2k/Home-Page-Cards-Workshop.png"
                        alt="Workshop card image"
                    />
                    </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default Hero
