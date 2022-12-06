import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./container.css"

export default function Container() {
  return (
    <>
    <div className="container">
        <LeftSide/>
        <RightSide/>
    </div>
    </>
  )
}
