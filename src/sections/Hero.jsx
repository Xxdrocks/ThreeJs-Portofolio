import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import AnimatedHitung from '../components/animatedhitung.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', 
            {
                opacity: 0,
                y: 20
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.3,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })
  return (
   <section id='hero' className="relative overflow-hidden">
    <div className="absolute top-0 left-0 z-10">
    <img src="/images/bg.png" alt="background" />
    </div>

    <div className="hero-layout">
        {/*Left hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
                <div className='hero-text'>
                    <h1>Shaping
                        <span className='slide'>
                            <span className='wrapper'>
                            {words.map((word) => (
                               <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                   <img src={word.imgPath} alt={word.text} className='xl:size-11 md:size-10 size-8 md:p-2 p-1 rounded-full bg-white-50' />
                                   <p>{word.text}</p>
                               </span>
                            ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into Future Website</h1>
                    <h1>with you as Developer</h1>
                </div>
                <p className='text-white-50 md:text-l relative z-10 pointer-events-none'>I am Fachri as Frontend Developer with a passion for creating visuallity</p>    
                <Button
                className='md:w-70 md:h-15 w-60 h-12' 
                id='button'
                text='See My Project'
                />
            </div>
        </header>
        {/*Right 3d content */}
        <figure>
            <div className="hero-3d-layout"> 
            <HeroExperience />
            </div>
        </figure>
    </div>
          <AnimatedHitung />
   </section>
  )
}

export default Hero
