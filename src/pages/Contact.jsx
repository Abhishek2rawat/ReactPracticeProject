import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl border-t pt-10'>
         <Title text1={'Contact'} text2={'Us'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className = 'w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
           <p className='text-gray-500'>54709 Williams Station <br /> Suite 350 ,Washington,USA</p>
           <p className='text-gray-500'>Tel: 123-456-789 <br /> Email:qwerty@gmail.com</p>
           <p className='font-semibold text-xl text-gray-600'>Carrers at forever</p>
           <p className='text-gray-500'>Learns More about team and job openings.</p>
           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
