import Image from 'next/image'
import {assets} from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkmode,setIsDarkmode}) => {
    const [isScroll,setIsScroll]=useState(false);

    const sideMenuRef=useRef();

        const openMenu= ()=>{

            sideMenuRef.current.style.transform='translateX(-16rem)'
        }
        const closeMenu= ()=>{

            sideMenuRef.current.style.transform='translateX(16rem)'
        }

        useEffect(()=>{
            window.addEventListener('scroll',()=>{
                if (scrollY>50){
                    setIsScroll(true)
                }else{
                    setIsScroll(false)

                }
            })
        },[])
  return (
    <>
    <div className='fixed top-0 right-0  -z-10 '>
        
    </div>
    <nav className={`dark:bg-can- dark:shadow-white/20 dark:text-stone-100 text-cyan-950 w-full fixed px-5 lg:px-8 xl:px-[8%] 
    py-4 flex items-center justify-between z-50 dark:${isScroll ? "bg-cyan-950 bg-opacity-50 backdrop-blur-lg  shadow-sm":""}  ${isScroll ? " bg-opacity-50 backdrop-blur-lg  shadow-sm":""}`}>
        <a href="#top">
          
            <Image src={isDarkmode?assets.logo1:assets.logo2} alt="" className='w-32 cursor-pointer mr-14'/>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8  px-12 py-3 bg-opacity-50'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='flex items-center gap-16'>

            <button onClick={()=>setIsDarkmode(prev=> !prev)}>
                <Image src={isDarkmode?assets.sun_icon:assets.moon_icon} alt='' className='w-4'/>
            </button>

            <a href="#contact" className='hidden lg:flex items-center  bg-black rounded-xl gap-3 px-5 py-2 text-white'>Contact me<Image src={assets.arrow_icon} alt="" className='w-3'/></a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkmode?assets.menu_icon_dark:assets.menu_icon} alt='' className='w-6'/>
            </button>
        </div>

        {/* -------mobile menu-------------*/}

        <ul ref={sideMenuRef} className='text-stone-600 flex md:hidden flex-col py-20 gap-4 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500'>
           
           <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.cross_icon} alt='' className='w-5 cursor-pointer'/>
           </div>
            <li><a onClick={closeMenu}href="#top">Home</a></li>
            <li><a onClick={closeMenu}href="#about">About me</a></li>
            <li><a onClick={closeMenu}href="#services">Services</a></li>
            <li><a onClick={closeMenu}href="#work">My work</a></li>
            <li><a onClick={closeMenu}href="#contact">Contact</a></li>

        </ul>
    </nav>
      
    </>
  )
}

export default Navbar


