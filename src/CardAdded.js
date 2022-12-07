import React from 'react'
import Confirm from './Confirm'
import checkIcon from "./imgs/check-icon.png"
import "./cardAdded.css"

export default function CardAdded() {
  return (
    <div className='card-added'>
        <img src={checkIcon} alt="" />
        <p className='thanks'>THANK YOU!</p>
        <p>We’ve added your card details</p>
        <Confirm/>
    </div>
  )
}
