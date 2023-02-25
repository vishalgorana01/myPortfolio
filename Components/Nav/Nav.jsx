import React, {useState} from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

function Nav() {
    const [active, setActive] = useState('#');

  return (
    <nav>
        <a href="#" className={active === '#'? 'active': ''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActive('#about')} className={active === '#about'? 'active': ''}><AiOutlineUser/></a>
        <a href="#exprience" onClick={()=> setActive('#exprience')} className={active === '#exprience'? 'active': ''}><BiBook/></a>
        <a href="#services" onClick={()=> setActive('#services')} className={active === '#services'? 'active': ''}><RiServiceLine/></a>
        <a href="#contact" onClick={()=> setActive('#contact')} className={active === '#contact'? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav