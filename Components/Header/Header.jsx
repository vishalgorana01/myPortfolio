import React from 'react'
import './Header.css'
import CTA from './CTA'

import profilePhoto from '../../Assets/Images/22654-6-man.png'
import HeaderSocials from './HeaderSocials'

function Header() {
    return (

        <header>
            <div className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Vishal Gorana</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='profilePhoto'>
                    <img src={profilePhoto} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header