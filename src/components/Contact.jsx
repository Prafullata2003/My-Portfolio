import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


const Contact = () => {
    const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    'service_89e20v9',
    'template_89e20v9',
    form.current,
    'BhA-qd-27SApYQ4D6'
  ).then(() => {
    alert("Message sent ✅")
    form.current.reset()
  })
  .catch((error) => {
  console.log("ERROR:", error)
  alert("Failed ❌ check console")
})
   
}
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration : 1, ease: 'easeOut'}}
    viewport={{once: false, amount:0.2}}
    id='contact'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In
                <span className='text-purple'>Touch</span>
            </h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl
            mx-auto'>

                {/*Contact Form */}
                <div>
                    <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block
                            text-gray-300 mb-2'>
                                Your Name
                            </label>
                            <input  id="name"  name="user_name" className='w-full bg-dark-300 border border-dark-400
                            rounded-lg px-4 py-3
                            outline-none' type='text'/>
                        </div>


                        <div>
                            <label htmlFor='email' className='block
                            text-gray-300 mb-2'>
                                Email Address
                            </label>
                            <input  id="email" name="user_email" className='w-full bg-dark-300 border border-dark-400
                            rounded-lg px-4 py-3
                            outline-none' type='email'/>
                        </div>

                        <div>
                          <label htmlFor='message' className='block text-gray-300 mb-2'>
                            
                                Your Message
                            </label>
                            <textarea id="message" name="message"
                            className='w-full h-40 bg-dark-300 border border-dark-400
                            rounded-lg px-4 py-3
                            outline-none' type='text'/>
                        </div>
                        
                        <button type='submit' className='w-full px-6 py-3 
                        bg-purple rounded-lg font-medium hover:bg-purple/80
                        transition duration-300 cursor-pointer'>
                            Send
                        </button>

                    </form>
                </div>

                {/* Contact Information */}

                {/* location*/}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaMapMarkerAlt />

                        </div>
                        <div>
                            <h3 className='text-lg font-semibold
                            mb-2'>Location</h3>
                            <p className='text-gray-400'>
                                Pune, Warje

                            </p>
                        </div>

                    </div>

                    {/* mail*/}
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaEnvelope />

                        </div>
                        <div>
                            <h3 className='text-lg font-semibold
                            mb-2'>Email</h3>
                            <p className='text-gray-400'>
                                prafullataohol0125@gmail.com

                            </p>
                        </div>

                    </div>

                    {/*Phone*/}
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaPhone />

                        </div>
                        
                        <div>
                            <h3 className='text-lg font-semibold
                            mb-2'>Phone</h3>
                            <p className='text-gray-400'>
                                +91 8855054712

                            </p>
                        </div>

                    </div>

                    {/*follow me*/}
                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4' >
                           Follow Me
                        </h3>
                        <div className='flex space-x-4'>
                            <a href='https://github.com/Prafullata2003' className='w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-purple hover:bg-purple hover:text-white
                            transition duration-300'>
                                <FaGithub />
                            </a>

                            <a href='https://www.linkedin.com/in/prafullata-ohol-250b61287' className='w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-blue-400 hover:bg-blue-400 hover:text-white
                            transition duration-300'>
                                <FaLinkedin />
                            </a>

                            <a href='https://www.instagram.com/praful_ohol' className='w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-pink hover:bg-pink hover:text-white
                            transition duration-300'>
                                <FaInstagram />
                            </a>

                            

                        </div>

                    </div>


                </div>
            </div>


        </div>


    </motion.div>
  )
}

export default Contact