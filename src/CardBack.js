import React, { useContext } from 'react'
import "./cardBack.css"
import { Context } from './Context'
import stripes from "./imgs/card-back-stripes.png"

export default function CardBack() {
  const context = useContext(Context)
  return (
    <div className="card-back">
      <div className="black-line">
        <p>0000 0000 0000 0000 </p>
      </div>
      <div className="cvc-display-back">
        <p className='cvc-hidden'>000</p>
        <p>{context.cvcDisplay}</p>
      </div>
      <div className="card-back-stripes">
        <img src={stripes} alt="" />
      </div>
    </div>
  )
}
