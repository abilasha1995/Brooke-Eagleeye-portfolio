import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import './Carrier.scss'

export const Carrier = () => {
  return (
   <section className="carrier">
    <div className="carrieContent">    
        <div className="carrieRight">
            <div>
                <span>My Carrier</span>
            </div>
            
            <div>
            <p>
                Explore the trophy-laden journey of Brooke Eagleeye. From triumphant victories on prestigious
                courses to the resilience shown in the face of challenges, delve into a Career
                adorned with archievements, accolades, and moment that have etched
            </p>
            </div>
            
        </div>
        <div className="carrirLeft">
            <h2>Career<br/>Highlights</h2>
                <button>
                    Discover More
                    <span><FiArrowUpRight/></span>
                </button>
        </div>
    </div>

   </section>
  )
}
