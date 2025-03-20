import React from 'react'
import { assets,servicesList } from '@/assets/assets'
import Image from 'next/image'

const Services = ({isDarkmode,setIsDarkmode}) => {
    return (
        <div id='services' className='dark:text-cyan-100 w-full px-[12%] py-10 scroll-mt-20'>
          
            <h4 className='text-center mb-2 text-lg '>Get a  hint about</h4>

            <h2 className='text-center md:text-5xl text-3xl font-black '>My services</h2>
            <Image src={assets.under_text} alt='my image' className='w-30 mx-auto' />
            <div className='flex w-full flex-col lg:flex-row items-center my-20 gap-20'>
                <ul className='grid grid-cols-1 md:grid-cols-4 gap-6 my-10'>
                              {servicesList.map(({icon,title,description},index)=>(
                                <div className=' rounded-sm shadow-sm  cursor-pointer dark:bg-cyan-950 bg-stone-50 dark:shadow-cyan-300 dark:hover:bg-cyan-900 hover:bg-stone-50 hover:-translate-y-1 duration-500 px-8 py-12' key={index}>
                                  <Image src={icon} alt='title' className='w-10 mt-3'/>
                                  <h3 className='  my-4 font-semibold dark:text-stone-50 text-black text-xl'>{title}</h3>
                                  <p className='dark:text-cyan-50 text-cyan-900  font-thin leading-5 '>{description}</p>
                                  <a className='flex items-center gap-2  mt-5'>Read more <Image className='w-5' src={assets.arrow_right } alt=''/></a>
                                </div>
                              ))}
                             </ul>
                          
                            



            </div>
        </div>
    )
}

export default Services
