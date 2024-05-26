import React from 'react'
import slide from '../../assets/slide-1.jpg'
import './Cards.scss'
import { SiderImage } from '../../datas/Datas'



export const Cards = ({img}) => {
    
    return (

        <div class="card">
            <img src={img} alt="" />
            <div class="container">
                <h4>Brooke Eagleeye</h4>
                <p>WGC Champions 2024</p>
            </div>
        </div>
    )
}
