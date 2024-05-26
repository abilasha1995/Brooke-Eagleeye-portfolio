import React from 'react'
import './Gallery.scss'
import { FiArrowUpRight } from "react-icons/fi";
import img1 from '../../assets/img-3.webp'
import img2 from '../../assets/img-4.jpg'
import img3 from '../../assets/img-5.jpg'
import img4 from '../../assets/img-6.jpg'
import img5 from '../../assets/img-7.webp'
import img6 from '../../assets/img-8.jpg'

export const Gallery = () => {
  return (
   <section className="gallery"> 
        <div className="galleryContent">
            <div><img src={img1}  alt="" /></div>
            <div></div>
            <div><img src={img2} alt="" /></div>  
            <div><img src={img3} alt="" /></div>
            <div><img src={img4} alt="" /></div>
            <div><img src={img5} alt="" /></div>  
            <div className="textContent">
             <div className="year">
              <span>2024</span>
              <span><FiArrowUpRight/></span>
             </div>
             <div className="wgc">
              <span>WGC</span>
             </div>
            </div>
            <div><img src={img6} 
             alt="" /></div>
        </div>
   </section>
  )
}
