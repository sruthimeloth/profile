import React from 'react'
import HeroImage from '../assets/sruthi.jpeg'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <div className='flex justify-center'>
        <img  src={HeroImage} alt=""  className='max-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        </div>
        <h1 className='text-6xl font-bold text-white'>
            I'm {" "}
            <span className=''>Sruthi M</span>
           , Software Developer
        </h1>
        <div className='mt-8 space-x-4'>
            <a  href ="#Contacts" className="bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact with me</a>
            <a  href="src\assets\sruthi_resume.pdf" download='sruthi_resume.pdf' className='bg-gradient-to-r from-pink-500 to to-yellow-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</a>
        </div>
        <div className='pt-5 '>
        <a href="mailto: sruthimeloth19@gmail.com">< FaEnvelope className="inline-block text-white mr-5 text-2xl " /></a>
        <a href="https://github.com/sruthimeloth"><FaGithub className="inline-block text-white mr-5 text-2xl"/></a>
        <a href="https://www.linkedin.com/in/sruthi-m-653701332/"><FaLinkedin className="inline-block text-blue-400 mr-5 text-2xl" /></a>
        </div>
      
    </div>
  )
}

export default Hero
