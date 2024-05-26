import React from 'react'
import { Cards } from './Cards'

export const CardList = ({cards}) => {
  return (
    <div>
        {cards.map((card, index) => (
        <Cards key={index} title={card.title} img={card.imageName} />
      ))}
    </div>
  )
}
