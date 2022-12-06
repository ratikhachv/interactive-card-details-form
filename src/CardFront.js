import React, { useContext } from 'react'
import "./cardFront.css"
import { Context } from './Context'

export default function CardFront() {
  const context = useContext(Context)
  return (
    <div className='card-front'>
        <div className="card-circles">
            <div className='bigger-circle'></div>
            <div className='smaller-circle'></div>
        </div>
        <div className="card-num-display">
            <p>{context.cardNumberDisplay}</p>
        </div>
        <div className="cardholder-cvc-display">
            <p className='cardholder-display'>{context.cardholderDisplay}</p>
            <p className='date-display-front'>{context.expDateMMDisplay}/{context.expDateYYDisplay}</p>
        </div>
    </div>
  )
}
