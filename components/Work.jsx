import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from "motion/react"


const Work = ({isDarkmode,setIsDarkmode}) => {
  return (
    <motion.div
    
    initial={{y:20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.9,delay:0.3}}
    
    id='work' className='text-cyan-950 dark:text-cyan-100 w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>Have a look at</h4>

      <h2 className='text-center font-black text-3xl '>My work.</h2>
      <Image src={assets.under_text} alt='my image' className='w-30 mx-auto' />
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '> Checkout my portfolio.
        Explore some of my top-notch projects</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>
        {workData.map((project, index) => (
          <div key={index} className=' dark:text-cyan-900 text-cyan-900 dark:shadow-cyan-500 dark:hover:bg-cyan-900 hover:bg-stone-50 hover:-translate-y-1 duration-500 shadow-sm  aspect-square  cursor-pointer '>
            <div>
              <Image src={project.bgImage} className='w-full' />
            </div>
            <div className='lg:h-100 dark:text-cyan-100 dark:bg-transparent dark:hover:bg-cyan-900 bg-stone-50 w-full rounded-md px-5 py-5  flex flex-col gap-5 justify-between '>
              <div>
                {project.techStack.join(" |  ")}
              </div>
              
              <div className='flex font-bold flex-col gap-4'>
                <p>{project.description}</p>
                <h2 className='font-black dark:text-cyan-50 text-stone-800 text-2xl'>{project.title}</h2>
                <p className='dark:text-cyan-50 leading-6 font-light'>{project.details}</p>

              </div>
              <div className='flex justify-between font-bold items-center'>

                <a href='#top'>Repo</a>


                <a href='#top' className='flex justify-center items-center gap-3'>

                  <p>View project </p>
                  <Image src={assets.arrow_right} alt='view icon' className='w-6' />
                </a>

              </div>

            </div>
          </div>
        ))}
      </div>


    </motion.div>
  )
}

export default Work
