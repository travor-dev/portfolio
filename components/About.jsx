import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'

const About = ({isDarkmode,setIsDarkmode}) => {
  return (
    <div className='bg-white'>
    <div id='about' className=' dark:bg -cyan-900 text-cyan-950 w-full bg-gradient-to-t from-white to-white px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>Get to know</h4>
     
     <h2 className='text-center md:text-5xl text-3xl font-black '>About me</h2>
     <Image src={assets.under_text} alt='my image' className='w-30 mx-auto sm:w-20' />
      <div className='flex w-full flex-col lg:flex-row items-center my-20 gap-20'>

        <div className='md:w-64 w-full rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='my image' className='w-full  rounded-3xl' />
        </div>
        <div className='flex-1'>
              <p className='mb-10 max-w-2xl text-cyan-900 font-light'>
                
           
                Iam a full-stack developer with over a
                 decade of professional expertise in this field.
                 I have had the privilege of working with organisations,
                  giving a hand in their success and growth.

                 Specializing in Next.js, Express.js, Typescript,
               Tailwind CSS and MongoDB.
                
             </p>
             <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({iconDark,icon,title,description},index)=>(
                <li className=' rounded-xl dark:bg-transparent bg-white shadow-sm p-6 cursor-pointer dark:hover:bg-cyan-900 hover:bg-stone-50 hover:-translate-y-1 duration-500' key={index}>
                  <Image src={isDarkmode?iconDark:icon} alt='title' className='w-7 mt-3'/>
                  <h3 className='my-4  font-black text-xl text-black'>{title}</h3>
                  <p className='text-l font-thin text-cyan-900'>{description}</p>
                </li>
              ))}
             </ul>
             <h4 className='my-6 font-bold text-cyan-600 '>Technologies.</h4>
             <ul className=' items-center grid grid-cols-5 sm:grid-cols-3  max-w-2xl  gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square bg-stone-50 shadow-sm rounded-full ' key={index}>
                  <Image src={tool} alt='technology' className='w-5 sm:w-7 hover:-translate-y-1 duration-500'/>
                </li> 
              ))}
             </ul>
        </div>
      </div>
      
    </div>
    <svg className='hidden dark:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#083344" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,122.7C840,149,960,235,1080,245.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  )
}

export default About
