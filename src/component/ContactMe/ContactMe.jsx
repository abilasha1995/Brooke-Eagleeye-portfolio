import React from 'react'
import bottomImg from '../../assets/footer.jpg'
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";
import secondLogo from '../../assets/nikeLogo.webp'
import './ContactMe.scss'

export const ContactMe = () => {

  function toggleNavbar () {
    var navMenu = document.querySelector('.toggleMenu');
    navMenu.classList.toggle('active');
  }
  return (
    <section className="contactMe">
            <div className="bottomImg">
                <img src={bottomImg} height={987} alt="" />
                <div className="contactTitle">contact me</div>
                  
          <div className="contactNav">
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
                    <li><a href="" className="active">About Me</a></li>
                    <li><a href="">Highlight Career</a></li>
                    <li><a href="">Partner & Events</a></li>
                    <li><a href="">Contact Me</a></li>
                </ul>

                
            </nav>

            <a href="#" className="logoTwo" >
                <img src={secondLogo}  alt=""/>
            </a>

            <button className="openBtn" 
                onClick={toggleNavbar}
            >
            <IoIosMenu />
            </button>
        </div>
      </div>
           
    </section>
  )
}
