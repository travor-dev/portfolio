import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkmode,setIsDarkmode}) => {
  return (
    <div className='dark:bg-transparent pt-20'>
      <div className='text-center'>
        <Image src={isDarkmode?assets.logo1:assets.logo2} className='w-32 mx-auto mb-2' />
       

      </div>
      <div className='w-max flex flex-col items-center gap-2 mx-auto text-stone-600'>

        <div className='flex gap-3' >
          <a href='https://www.facebook.com/share/16B2Toiwbi'><Image src={isDarkmode?assets.facebook_icon_dark:assets.facebook_icon} alt='' className=' w-7 ' /></a>
          <a href='https://www.tiktok.com/@travordev?_t=ZM-8ui03xpa4pi&_r=1'><Image src={isDarkmode?assets.tiktok_icon_dark:assets.tiktok_icon} alt='' className='w-7 ' /></a>
          <a href='https://www.instagram.com/travordev?igsh=bGltam9uMTdzODNt'><Image src={isDarkmode?assets.instagram_icon_dark:assets.instagram_icon} alt='' className='w-7 ' /></a>
          <a href='https://x.com/travordev?t=zPOuMFYdD6tWtSYlUB46-Q&s=09'><Image src={isDarkmode?assets.twitter_icon_dark:assets.twitter_icon} alt='' className='w-7 ' /></a>
        </div>

        <p className='dark:text-stone-300'>© 2025 travor dev. All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer
