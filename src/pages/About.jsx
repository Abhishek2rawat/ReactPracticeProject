import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        
          <p>Welcome to [Your Brand Name], your one-stop destination for [mention product category, e.g., trendy fashion, cutting-edge electronics, or eco-friendly home essentials]. We are passionate about delivering high-quality products that enhance your lifestyle, all while ensuring a seamless and enjoyable shopping experience.</p>
          <p>At [Your Brand Name], we believe in providing premium quality, affordability, and exceptional customer service. Our goal is to make shopping easy, convenient, and reliable by offering a curated selection of the best products available.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At [Your Brand Name], we believe in providing premium quality, affordability, and exceptional customer service. Our goal is to make shopping easy, convenient, and reliable by offering a curated selection of the best products available.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, we are dedicated to providing a seamless and enjoyable shopping experience with a commitment to quality, affordability, and customer satisfaction. We handpick only the best products to ensure superior craftsmanship, durability, and style, all at competitive prices.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, we offer premium quality, affordable prices, fast shipping, and hassle-free returns. With exceptional customer service and a commitment to trust and transparency, we ensure a seamless and satisfying shopping experience every time.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Servives:</b>
          <p className='text-gray-600'>At Forever, we offer premium quality, affordable prices, fast shipping, and hassle-free returns. With exceptional customer service and a commitment to trust and transparency, we ensure a seamless and satisfying shopping experience every time.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
