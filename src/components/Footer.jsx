import React from 'react';
import Btn_github from '../img/btn_github.svg'
import Btn_linkedin from '../img/btn_linkedin.svg'

export default function Footer() {
  return (
    <div>
        <div className='Footer'>
            <a href="https://github.com/PANCHOv96" target='_blank' rel="noopener noreferrer">
                <img src={Btn_github} alt='Github' />
            </a>
            <a href="https://www.linkedin.com/in/francisco-fabian-vallone-510b71223/" target='_blank' rel="noopener noreferrer">
                <img src={Btn_linkedin} alt='Linkedin' />  
            </a>
        </div>
        <p>Designed and Developed by <span>Francisco Vallone</span></p>
    </div>
  )
}