import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
             <div className='flex flex-col justify-center'>
                <a href='/' >Home</a>
             </div> 
             <div className='socials'>
                {socialImgs.map((img) => (
                    <a className="icon" href={img.URL}
      target="_blank"
      rel="noopener noreferrer"
      key={img.name}
      >
                        <img src={img.imgPath} alt="social" />
                    </a>
                ))}
             </div>

             <div className='flex- flex-col justify-center'>
               <p className='text-center md:text-end'>
                    {new Date().getFullYear()} Fachri Winata | All Rights Reserved.
               </p>
             </div>
        </div>
    </footer>
  )
}

export default Footer
