import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import {motion} from "motion/react"

const Contact = ({isDarkmode,setIsDarkmode}) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "edf8830c-bf9d-4673-a5f1-d367fc91d520");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div

    initial={{y:20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.9,delay:0.3}}
    
    id='contact' className='dark:bg-cyan-950  text-cyan-950 dark:text-cyan-50 w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='dark:text-stone-50 text-center mb-2 text-lg '>Lets connect.</h4>

      <h2 className='text-center md:text-5xl text-3xl font-black '>Get in touch</h2>
      <Image src={assets.under_text} alt='my image' className='w-30 mx-auto' />
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '>Feel free to link with me. Am ready to give a hand.</p>

      <div className='items-start  flex flex-col gap-6  mx-auto  '>
        <div className='w-max flex  gap-2 items-center '>
          <Image src={assets.location_icon} alt='' className='w-7 ' />
          <div className='flex flex-col gap-0 leading-5'>
            <b className='dark:text-cyan-100 text-stone-700'>Location</b>
            Kampala, Uganda.
          </div>
        </div>
        <div className='w-max flex items-center gap-2 '>
          <Image src={assets.mail_icon} alt='' className='w-7 ' />
          
           <div className='flex flex-col gap-0 leading-5'>
            <b className='dark:text-cyan-100 text-stone-700'>Contact</b>
            travor.dev@gmail.com
          </div>
         
        </div>

      </div>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='flex flex-col gap-6 mt-10 mb-8'>
          <input name='name' type="text" placeholder='Enter your name .' required className='dark:bg-cyan-950 flex-1 p-3 outline-none border-[2px] dark:border-cyan-400  border-slate-200 rounded-md' />
          <input name='email' type="email" placeholder='Enter your email.' required className='dark:border-cyan-400 dark:bg-cyan-950 flex-1 p-3 outline-none border-[0.9px] border-slate-200 rounded-md' />

        </div>
        <textarea name='message' rows='6' placeholder='Enter your message' required className='dark:border-cyan-400 dark:bg-cyan-950 w-full p-4 outline-none border-[0.9px] border-stone-300 rounded-md  mb-6'></textarea>
        <motion.button
        
        whileHover={{scale:1.05}}
        transition={{duration:0.4}}
        
        type='submit' className='flex items-center justify-between dark:text-stone-800 font-black dark:hover:bg-cyan-900 dark:bg-cyan-300  text-stone-50 px-3 py-2 rounded-md bg-black gap-3' >Submit now <Image src={assets.arrow_right} alt='' className='w-4' /></motion.button>
        <p className='mt-4'>
          {result}
        </p>

      </form>
    </motion.div>
  )
}

export default Contact
