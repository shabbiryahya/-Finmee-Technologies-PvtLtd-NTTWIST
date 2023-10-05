import React, { useState } from 'react'

import './Navk.css'
import logo from "./ntwistlight.png";

{/* Navbar component */}

const Nato = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    const [color , setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90 ) {
        setColor(true)
    } else {
        setColor(false)

    } 
    }
{/*  added event-listner to change color or to make navbar transperent after scroll down*/}
    window.addEventListener('scroll', changeColor)

    return (
        
        <div className={color ? 'header header-bg  ' :'header' }>

            
            <nav className='navbar'>
            <div style={{marginRight:"550px"}} >
                <img src={logo} style={{display:"block", width:"150px"}} ></img>
            </div>
              <div>
                {/*  All Navbar menu*/}

                {/*  i have kept it blanked , we can add anoter pages by React Router Dom */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <div className='nav-item'><a href='/' onClick={closeMenu}>Home</a></div>
                  <div className='nav-item'> <a href='#' onClick={closeMenu}>Industries</a></div>
                   <div className='nav-item'>  <a href='#' onClick={closeMenu}>AI Industries</a></div>
                  <div  className='nav-item'> <a href='#' onClick={closeMenu}>Blog</a></div>
                  <div  className='nav-item'> <a href='#' onClick={closeMenu}>Contact Us</a></div>

               


                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nato;