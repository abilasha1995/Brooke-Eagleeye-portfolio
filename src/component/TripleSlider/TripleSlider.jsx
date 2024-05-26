import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import './TripleSlider.scss'
import ico_1 from '../../assets/img-9.webp'
import ico_2 from '../../assets/img-10.webp'
import ico_3 from '../../assets/img-11.webp'

export const TripleSlider = () => {
  return (
        <div className="triple">
          <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5

            }}
            modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img src={ico_1}  alt=''/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src={ico_2}  alt='' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src={ico_3} width={479} height={527} alt='' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src={ico_1} alt=''/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src={ico_2} alt='' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src={ico_3} alt='' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    
  )
}
