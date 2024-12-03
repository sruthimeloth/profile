import React ,{ useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
// import React, from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from '@emailjs/browser';



const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g9gg4dh', 'template_j7vzhpv', form.current, {
        publicKey: 'e_0WYI5rjvYDy_9oe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="bg-black text-white py-20" id="Contacts">
      <div className="container mx-auto px-8 md:px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className= "text-2xl font-bold bg-gradient-to-r from-pink-500 to to-yellow-500 text-transparent bg-clip-text">Let's Talk</h3>
            <p>
              I am open to discussing web development projects or partnership
              opportunities.
            </p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:sruthimeloth19@gmail.com"
                className="hover:underline"
              >
                sruthimeloth19@gmail.com
              </a>
            </div>

            <div className="mb-4 ">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <a href="tel:+918089846675" className="hover:underline">
                +918089846675
              </a>
            </div>

            <div className="mb-4 ">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>
                Panoor(House), Kottoor(post), Muliyar, Kasaragod 671-542
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
          
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="Name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus: outline-none focus:border-green-400"
                  placeholder="Enter your Name" 
                  name="user_name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Your Email</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus: outline-none focus:border-green-400"
                  placeholder="Enter your email"
                  name="user_email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus: outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter your Message"
                  name="message"
                />
              </div>
              <button className='bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-8 py-2 rounded-full ' type="submit" value="Send" >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
