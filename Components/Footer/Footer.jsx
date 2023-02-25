import React from 'react'
import './Footer.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>VK_Lohar</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exprirence">Exprience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://instagram.com"><FaInstagramSquare className='footer_socials-icons' /></a>
        <a href="https://twitter.com"><BsTwitter className='footer_socials-icons' /></a>
        <a href="https://linkedin.com"><BsLinkedin className='footer_socials-icons' /></a>
      </div>

      <div className="footer_copyright">
        <small>© Vk_lohar portfolio. all rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer