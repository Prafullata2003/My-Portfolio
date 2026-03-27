import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets';
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

// const skills = [
//   { title: 'React', icon: FaReact },
//   { title: 'Node.js', icon: FaNodeJs },
//   { title: 'HTML5', icon: FaHtml5 },
//   { title: 'CSS3', icon: FaCss3Alt },
//   { title: 'JavaScript', icon: FaJs },
// ];





const SkillsSection= () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration : 1, ease: 'easeOut'}}
    viewport={{once: false, amount:0.2}}
    id='skills'
    className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                My <span className='text-purple'>Skills</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto
            mb-16'>
                Technologies I work with to bring ideas to life 

            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
            max-w-5xl mx-auto '>
                {
                    skills.map((skill, index)=>(
                        <div key={index} className='bg-dark-300 rounded-2xl p-6
                        hover:-translate-y-2 transition duration-300 cursor-pointer'>
                            <div className='flex items-center mb-4'>
                                <skill.icon className='w-11 h-11 text-purple mr-2 ' />
                                <h3 className='text-xl font-semibold'>{skill.title}</h3>
                            </div> 
                            <p className='text-gray-400 mb-4' >{skill.description}
                            </p>  

                            <div className='flex flex-wrap gap-2'>
                                {skill.tags?.map((tech)=>(
                                    <span key={tech} className='px-3 py-1
                                    bg-dark-400 rounded-full text-sm'>{tech}

                                    </span>
                                ))

                                }

                            </div>

                        </div>    

                    ))
                }

            </div>

        </div>


    </motion.div>
  )
}

export default SkillsSection