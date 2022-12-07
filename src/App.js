import logo from './logo.svg';
import React, { useState } from 'react'
import './reset.css'
import './App.css';
import Container from './Container';
import { Context } from './Context';
import { useRef } from 'react';


function App() {
  const ref = useRef(null);
  const ref1 =useRef(null)
  const ref2 = useRef(null)
  const [cardholder, setCardholder] = useState("")
  const [cardholderDisplay, setCardholderDisplay] = useState("Jane Appleseed")
  const [cardNumber, setCardNumber] = useState("")
  const [cardNumberDisplay, setCardNumberDisplay] = useState("0000 0000 0000 0000")
  const [expDateMM, setExpDateMM] = useState("")
  const [expDateMMDisplay, setExpDateMMDisplay] = useState("00")
  const [expDateYY, setExpDateYY] = useState("")
  const [expDateYYDisplay, setExpDateYYDisplay] = useState("00")
  const [cvc, setCvc] = useState("")
  const [cvcDisplay, setCvcDisplay] = useState("000")
  const [checkNums, setCheckNums] = useState("")
  const [checkBlankDate, setCheckBlanckDate] = useState("Can’t be blank")
  const [checkBlankCvc, setCheckBlankCvc] = useState("Can’t be blank")
  const [confirmed, setConfirmed] = useState("")
  const [btnText, setBtnText] = useState("confirm")
  // const [expired, setExpired] = useState("")

  function changeCardholder(e){
    setCardholder(e.target.value)
    setCardholderDisplay(e.target.value)
    addDash(cardholder)
  }

  function addDash(string){
    let str;
    if(string.length > 2){
      str=string.substring(0, string.length/2) + "/" + string.substring(string.length/2, string.length)
    }
    return str
  }

  function changeCardNumber(e){
    let val = e.target.value;
    if(val.length <= 19){
      //adds spaces after four numbers
      let str =val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
      setCardNumber(str.trim())
      setCardNumberDisplay(str.trim())
      console.log(cardNumberDisplay);
    }
    if (val.length >= 19) {
      //moves focus to another input
      ref.current.focus();
    }
      //checks if string contains anything that is not a number
      let valRemovedSpaces=val.replace(/\s/g, '')
    if(isNaN(valRemovedSpaces * 1) ){
      setCheckNums("Wrong format, numbers only")
    }else{
      setCheckNums("")
    }
  }

  function changeMM(e){
    if(e.target.value.length <= 2){
      setExpDateMM(e.target.value)
      setExpDateMMDisplay(e.target.value)
      if(e.target.value > 12){
        setExpDateMM(12)
      }
      if(e.target.value.length >=2){
        ref1.current.focus()
      }
    }
  }

  function changeYY(e){
    if(e.target.value.length <= 2){
      setExpDateYY(e.target.value)
      setExpDateYYDisplay(e.target.value)
      if(e.target.value.length >=2){
        ref2.current.focus()
      }
    }
  }

  function changeCvc(e){
    if(e.target.value.length <= 3){
      setCvc(e.target.value)
      setCvcDisplay(e.target.value)
      setCheckBlankCvc("")
    }
    if(e.target.value.length == 0){
      setCheckBlankCvc("Can’t be blank")
    }
  }

  function checkConfirmed(){
    if(cardholder.length > 1 && cvc.length >= 3 && expDateYY.length
       >= 2 && expDateMM.length >= 2 && cardNumber.length >= 18 && checkNums.length < 24){
        console.log("wha");
        setConfirmed(!confirmed)
        setBtnText("Continue")
       }
  }

  return (
    <>
      <Context.Provider value={{cardholder, cardholderDisplay, 
      changeCardholder, cardNumber, cardNumberDisplay,
      changeCardNumber, ref, ref1, ref2, changeMM, expDateMM, 
      changeYY, expDateYY, changeCvc, cvc, expDateMMDisplay, expDateYYDisplay, 
      cvcDisplay, checkNums, checkBlankDate, checkBlankCvc, 
      checkConfirmed, confirmed, btnText}}>
        <Container/>
      </Context.Provider>
    </>
  );
}

export default App;
