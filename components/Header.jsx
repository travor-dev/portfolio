import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { FiLinkedin,FiGithub } from "react-icons/fi"

const Header = ({isDarkmode,setIsDarkmode}) => {
  return (
    <div className='pt-20 dark:text-stone-100 w-11/12 max-w-3xl text-center py-15 mx-auto h-auto flex flex-col items-center justify-center gap-4 '>
        <motion.div
         initial={{scale:0}}
         whileInView={{scale:1}}
         transition={{duration:0.8,type:'spring',stiffness:100}}
         
        >
            <Image src={isDarkmode?assets.profile_img:assets.profile_img2} alt='' className=' rounded-full w-30 border-5 border-slate-200 '/>
           
        </motion.div>
        <h3 className='flex items-end gap-2 text-xl text-cyan-950 font-medium md:text-2xl mb-3 dark:bg-slate-200 bg-slate-200 px-2 rounded-sm bg-opacity-75 '>Travor Joel</h3>
      
         <Image src={assets.intro} alt='' className='hidden lg:flex  '/>
         <Image src={isDarkmode?assets.intro2_dark:assets.intro2} alt='' className='flex lg:hidden w-3/4  '/>
        <p className=' dark:text-stone-100 font-Ovo max-w-2xl mx-auto text-lg  text-cyan-900'>
       
      
        </p>
        <div className='flex flex-col items-center gap-4 mt-4'>
            <div className='flex flex-col md:flex-row items-center gap-4'>
            <motion.a
                    
                    whileHover={{scale:1.05}}
                    transition={{duration:0.4}}
            
            href="#contact" className='px-10   py-3 boder-white rounded-xl font-black dark:bg-cyan-300 bg-cyan-950 text-stone-100 flex items-center gap-2'>Reach out <Image src={assets.arrow_icon} alt="" className='w-3'/></motion.a>
            <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-xl dark:border-stone-100 border-stone-600 flex items-center gap-2'>See resume <Image src={assets.arrow_icon} alt="" className='w-3'/></a>
            </div>
            <div className='flex gap-6'>
            <FiLinkedin size={25}/>
            <FiGithub size={25}/>
            </div>
            </div>
           
        
      
    </div>
  )
}


export default Header
