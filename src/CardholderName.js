import React, { useContext } from 'react'
import { Context } from './Context'

export default function CardholderName() {
    const context = useContext(Context)
  return (
    <div>
        <form action="">
            <label htmlFor="cardholder">Cardholder Name</label>
            <input type="text" name="cardholder" placeholder={`eg. Jane Appleseed`}
             value={context.cardholder} onChange={(e)=>{context.changeCardholder(e)}}
            />
        </form>
    </div>
  )
}
