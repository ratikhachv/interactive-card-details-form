import React, { useContext, useState } from 'react'
import './rightSide.css'
import CardInfo from './CardInfo'
import { Context } from './Context'
import CardAdded from './CardAdded'

export default function RightSide() {
  const context = useContext(Context) 
  return (
    <div className='right-side'>
      {context.confirmed ? <CardAdded/> : <CardInfo/>}
    </div>
  )
}
