import React, { useState } from 'react'
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";
import secondLogo from '../../assets/nikeLogo.webp'
import './Navbar.scss'

export const Navbar = () => {
    const [headerActive, setHeaderActive] = useState(false);

    function toggleNavbar () {
        var navMenu = document.querySelector('.toggleMenu');
        navMenu.classList.toggle('active');
      }

    function activeHeader (){
        var navBar = document.querySelector('.navbar');
    
        if (window.scrollY >100) {
            setHeaderActive(true);
       
          } else {
            setHeaderActive(false); 
          }
    }
    window.addEventListener("scroll",activeHeader);

    
  return (
        <div className={headerActive ? 'navbarActive' : 'navbar' }>
            <a href="#" className="logoOne">
               <span>be</span>
            </a>

            <nav className="toggleMenu">
                    <button className="closeBtn" 
                        onClick={toggleNavbar}
                    >
                        <IoIosCloseCircleOutline />
                    </button>

                <ul>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Highlight Career</a></li>
                    <li><a href="">Partner & Events</a></li>
                    <li><a href="">Contact Me</a></li>
                </ul>

                
            </nav>

            <a href="#" className="logoTwo" >
                <img id='secondLogo' src={secondLogo} width={100} alt=""/>
            </a>

            <button className="openBtn" 
                onClick={toggleNavbar}
            >
            <IoIosMenu />
            </button>
        </div>
  )
}
