import React from 'react'
import "./cardInfo.css"
import CardholderName from './CardholderName'
import CardNumber from './CardNumber'
import ExpDateCvc from './ExpDateCvc'
import Confirm from './Confirm'


export default function CardInfo() {
  return (
    <div className='card-info'>
        <CardholderName/>
        <CardNumber/>
        <ExpDateCvc/>
        <Confirm/>
    </div>
  )
}
