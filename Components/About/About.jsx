import React from 'react'
import './About.css'
import profilePhoto from '../../Assets/Images/22654-6-man.png'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section id='#about'>
        <h5>Get to know</h5>
        <h2>About me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={profilePhoto} alt="About Image" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className='about_icon'/> 
                        <h5>Exprience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className="about_card">
                        <FiUsers className='about_icon'/> 
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article>

                    <article className="about_card">
                        <VscFolderLibrary className='about_icon'/> 
                        <h5>Projects</h5>
                        <small>20+ Completed</small>
                    </article>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia harum pariatur alias aperiam ea placeat vero? Illo at numquam ut nisi magni iure quos magnam? Quod corporis cumque aut.</p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About