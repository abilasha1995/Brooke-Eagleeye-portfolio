import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import './Events.scss'
import { TripleSlider } from '../TripleSlider/TripleSlider';

export const Events = () => {
  return (
    <section className="event">
       
            <div className="eventTitle">
                <h2>Partnerships <br/> & Events</h2>
                <span>My Partnership</span>
            </div>

            <div className="eventDes">
                <div className="contactBtn">
                <button>
                    Contact Me
                    <span><FiArrowUpRight/></span>
                </button>
                </div>

                <div className="des">
                    <p>
                        Explore opportunities for collaboration with Brooke Eagleeye. From corporate partnerships to golf events, discover how you can align your brand with a symbol of excellence in the world of professional golf
                    </p>
                </div>
            </div>
                
                <div className="slider">
                <TripleSlider/>
                </div>
                

    </section>
  )
}
