import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import img1 from '../../assets/img-18.jpg'
import img2 from '../../assets/img-12.webp'
import './Trademark.scss'

export const Trademark = () => {
  return (
    <section className="Trademark">
      <div className="treadmarkHead">
        <div className="trademarkBtn">
          <button>
            Discover More
            <span><FiArrowUpRight /></span>
          </button>
        </div>
        <div className="trademarkTitle">
          <h2>Trademark <br />Technique</h2>
          <span>My Technique</span>
        </div>
      </div>


      <div className="trademarkContent">
        <div className="trademarkLeft">

          <div className="trademarkDesOne">
            <p>
              For aspiring golf enthusiasts, gain insights into Brooke eagleeye swing mechanics and training routines. Discover the artistry behind a powerful drive and the finesse required for a precision putt
            </p>
          </div>

          <div className="trademarkDesTwo">
            <p>
              Elevate your own game with tips and techniques shared by a true master of the sport
            </p>
          </div>
        </div>

        <div className="aboutRight">
          <div className="igOne">
            <img src={img1} width={500} alt="" />
          </div>
          <div className="igTwo">
            <img src={img2} width={200} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
