import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white py-8'>
    <div className="container max:auto px-8 md:px-16 lg:px-24">
      <div className='flex flex-col md:flex-row md:space-x-12 items-center'>
        <div className='flex-1 mb-4 md:mb-0'>
          <h3  className='text-2xl font-bold mb-2 text-blue-500'>
            SRUTHI M
          </h3>
          <p className='text-gray-400 text' >
            SoftWare Developer ,Specializing in a web and software development.
          </p>
        </div>
        {/* <div className='flex-1 w-full'>
          <form  className=' flex items-center justify-center'>
            <input type='email' placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'></input>
            <button className='bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full '> Subscribe</button>
          </form>
        </div> */}
         <div className='pt-5 '>
        <a href="mailto: sruthimeloth19@gmail.com">< FaEnvelope className="inline-block text-white mr-5 text-2xl " /></a>
        <a href="https://github.com/sruthimeloth"><FaGithub className="inline-block text-white mr-5 text-2xl"/></a>
        <a href="https://www.linkedin.com/in/sruthi-m-653701332/"><FaLinkedin className="inline-block  text-white mr-5 text-2xl" /></a>
        <a href="https://wa.me/+918089846675/"><FaWhatsapp className="inline-block  text-white mr-5 text-2xl" /></a>
        <a href="tele:8089846675"><FaPhone className="inline-block  text-white mr-5 text-2xl" /></a>
        </div>


      </div>
      
    </div>
    </footer>
  )
}

export default Footer