import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration : 0.6, ease: 'easeInOut'}}
    viewport={{once: true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About 
                <span className='text-purple'>Me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
            Get to know more about my background and passion</p>

            {/* image + my journey */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
              {/*image*/}
              <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                <motion.img
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration : 0.9, ease: 'easeOut'}}
                viewport={{once: false, amount:0.2}}
                className='w-full h-full object-cover'
                src={assets.profileImg7} alt="Profile" />
              </div>
              
              {/* Text Content*/}
              <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration : 0.9, ease: 'easeOut'}}
              viewport={{once: false, amount:0.2}}
              className='md:w-1/2'
              >
                <div className='rounded-2xl p-8'>
                  <h3 className='text-2xl font-semibold mb-6'>
                    My Journey
                  </h3>
                  <p  className='text-gray-300 mb-6 text-lg'>
                    I began my journey in web development driven by a passion for creating 
                    intuitive and scalable applications. Skilled in the MERN stack 
                    (MongoDB, Express.js, React, Node.js), I am always eager to learn new 
                    technologies and frameworks to enhance my skills and build innovative solutions.</p>
                  <p className='text-gray-300 mb-12 text-lg'>
                    "I am a passionate Full-Stack Developer with a strong
                     foundation in building responsive and user-friendly web 
                     applications. I have hands-on experience in technologies 
                     like HTML, CSS, JavaScript, and React, along with backend 
                     tools such as Node.js and Express.js. I also work with 
                     databases like MongoDB and MySQL to build complete web solutions."
                  </p>

                  <a 
                    href="https://drive.google.com/file/d/1XX46wkNgSrKY9QT2-Ua3rO43virdrVdP/view?usp=drivesdk" 
                    download
                    className="inline-block px-6 py-3 bg-purple text-white rounded-lg font-medium 
                    hover:bg-purple/80 transition duration-300"
                  >
                  Download CV
                  </a>

                </div>

              </motion.div>

            

             
             
                
            </div>

        </div>
       
    </motion.div>
  )
}

export default About