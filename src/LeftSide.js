import React from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'
import "./leftSide.css"

export default function LeftSide() {
  return (
    <div className='left-side'>
        <CardFront/>
        <CardBack/>
    </div>
  )
}
