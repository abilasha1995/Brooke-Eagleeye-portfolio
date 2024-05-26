import React, { useRef, useState } from 'react';
import bgCover from '../../assets/heroBackground.webp'
import slide1 from '../../assets/slide-1.jpg'
import slide2 from '../../assets/img-2.webp'
import slide3 from '../../assets/img-3.webp'
import sign from '../../assets/sign.webp'
import { CiInstagram, CiYoutube} from "react-icons/ci";
import { PiXLogoThin, PiTiktokLogoThin } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Hero.scss'
import { CardList } from '../Cards/CardList';
import { SiderImage } from '../../datas/Datas';
import { Cards } from '../Cards/Cards';




export const Hero = () => {
  return (
    <section className="hero">
    <div className="imgCover">
        <img src={bgCover} alt=""/>
    </div>

    <div className="heroContent">
        <div className="heroLeft">
            
            <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><Cards img={SiderImage[0]}/></SwiperSlide>
                <SwiperSlide><Cards img={SiderImage[1]}/></SwiperSlide>
                <SwiperSlide><Cards img={SiderImage[2]}/></SwiperSlide>
                <SwiperSlide><Cards img={SiderImage[3]}/></SwiperSlide>
        
                
            </Swiper>
            </div>
        </div>

        <div className="heroRight">
            <div><h1>golf<br/>journey</h1></div>
            <div>
                <p>
                    <span>Embark on a journey through the fairways</span> 
                    <span>and green with Brook Eagleeye, a</span> 
                    <span>dedicated and accomplished</span>
                    <span>professional golfer</span>
                </p>
            </div>

            <div className="socialBtn">
                <button> <CiInstagram /></button>
                <button> <CiYoutube/></button>
                <button> <PiXLogoThin/></button>
                <button> <PiTiktokLogoThin/></button>
            </div>

            <img src={sign} width="300" height="217" alt="" />

        </div>
    </div>
       
</section>
  )
}
