import React from 'react'
import img1 from '../../assets/img-1.webp'
import img2 from '../../assets/img-2.webp'
import { FiArrowUpRight } from "react-icons/fi";
import './About.scss'

export const About = () => {
  return (
      <section className="about">
        <div className="aboutContent">
              <div className="aboutLeft">
                  <div className="aboutTitle">
                      <span>About me</span>
                    <h2>Who is <br/>Brooke</h2>
                  </div>
                  <div className="aboutDes">
                      <p>
                          Discover the story behind the swing. Brooke Eagleeye is more than just a golfer, they are a strategist, a competitor, and a relentless pursuer of perfection
                      </p>
                  </div>
                  <button>
                    Learn More
                    <span><FiArrowUpRight/></span>
                    </button>
                </div>

              <div className="aboutRight">
                <div className="imgOne">
                  <img src={img1}  alt="" />
                </div>
                <div className="imgTwo">
                <img src={img2}  alt="" />
                </div>
              </div>
        </div>
      </section>
  )
}
