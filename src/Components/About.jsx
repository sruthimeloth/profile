import React from 'react'
import HeroImage from '../assets/Hero-image.jpg'
const About = () => {
  return (
    <div  className='bg-black text-white py-20' id="AboutMe">
      <div  className=' container mx-auto px-8 md:px-6 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex gap-10 items-center'>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={HeroImage} alt=""  className='w-72 h-80 rounded  object-cover mb-8 md:mb-0'/>
            <div className='flex-1'>
      
        <p className='text-lg mb-8'>

            Iam a Softwate Developer with a focus on React and  Database(SQL). <br />
            With a strong foundation in both front end and back end  <br />
            Technologies. 1 year and 6 month Experience.
        </p>
       
        <div className='space-y-4 '>
            <div className='items-center '>
              <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-500 to to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

                </div>
                </div>
              </div>
              <div className='items-center '>
              <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-500 to to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>

                </div>
                </div>
              </div>
              <div className='items-center '>
              <label htmlFor="htmlandcss" className='w-2/12'>Database(SQL)</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-500 to to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

                </div>
                </div>
              </div>
              <div className='items-center '>
              <label htmlFor="htmlandcss" className='w-2/12'>Python</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-500 to to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'>

                </div>
                </div>
              </div>
            </div>
        </div>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default About
