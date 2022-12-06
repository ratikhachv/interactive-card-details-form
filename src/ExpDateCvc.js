import React, { useContext } from 'react'
import { Context } from './Context'

export default function ExpDateCvc() {
    const context = useContext(Context)
  return (
    <div>
        <form action="">
            <label htmlFor="exp-date-mm">Exp. Date (MM/YY)</label>
            <input ref={context.ref} type="number" name="exp-date-mm" placeholder={`MM`}
             value={context.expDateMM} onChange={(e)=>{context.changeMM(e)}}
            />
            <p>{context.checkBlankDate}</p>
            <input ref={context.ref1} type="number" name="exp-date-yy" placeholder={`YY`}
             value={context.expDateYY} onChange={(e)=>{context.changeYY(e)}}
            />
            <label htmlFor="cvc">CVC</label>
            <input ref={context.ref2} type="number" name="cvc" placeholder={`000`}
             value={context.cvc} onChange={(e)=>{context.changeCvc(e)}}
            />
            <p>{context.checkBlankCvc}</p>
        </form>
    </div>
  )
}
