import React, { useContext } from 'react'
import { Context } from './Context'

export default function CardNumber() {
    const context = useContext(Context)
  return (
    <div className='card-number'>
        <form action="">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="card-number" placeholder={`eg. 0000 0000 0000 0000`}
             value={context.cardNumber} onChange={(e)=>{context.changeCardNumber(e)}}
            />
        </form>
        <p className='warning'>{context.checkNums}</p>
    </div>
  )
}
