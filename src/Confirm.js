import React, { useContext } from 'react'
import './confirm.css'
import { Context } from './Context'

export default function Confirm() {
    const context = useContext(Context)
  return (
    <button onClick={context.checkConfirmed}>{context.btnText}</button>
  )
}
