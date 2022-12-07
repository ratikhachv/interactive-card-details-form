import React, { useContext } from 'react'
import { Context } from './Context'
import "./expDateCvc.css"

export default function ExpDateCvc() {
    const context = useContext(Context)
  return (
    <div className='exp-date-cvc'>
        <form action="">
          <div className="exp-date">
            <div>
              <label htmlFor="exp-date-mm">Exp. Date (MM/YY)</label>
            </div>
            <div className='exp-date-inputs'>
              <input ref={context.ref} type="number" name="exp-date-mm" placeholder={`MM`}
              value={context.expDateMM} onChange={(e)=>{context.changeMM(e)}}
              />
              <input ref={context.ref1} type="number" name="exp-date-yy" placeholder={`YY`}
              value={context.expDateYY} onChange={(e)=>{context.changeYY(e)}}
              />
            </div>
            <div>
            {context.expDateYY.length < 1 || context.expDateMM.length < 1 ? 
            <p className='warning'>{context.checkBlankDate}</p> : ""} 
            </div>
          </div>
          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input ref={context.ref2} type="number" name="cvc" placeholder={`000`}
             value={context.cvc} onChange={(e)=>{context.changeCvc(e)}}
            />
            <p className='warning'>{context.checkBlankCvc}</p>
          </div>
        </form>
    </div>
  )
}
