import React, {useState} from 'react'
import './App.css'

import Form from './components/Form'
import ThankYou from './components/ThankYou';
import Cards from './components/Cards';

import bgDesktop from './images/bg-main-desktop.png'
import bgMobile from './images/bg-main-mobile.png'

function App() {
  const[confirmed, setConfirmed] =useState(false)
  const[name, setName]=useState("")
  const[cardNumber, setCardNumber]=useState("")
  const[date, setDate]=useState("")
  const[cvc, setCvc]=useState("")

  return (
    <>
      <div className="container">
        <picture>
          <source media="(min-width: 1024px)" srcSet={bgDesktop}/>
          <img src={bgMobile} alt=''/> 
        </picture>
      </div>

      <div>

        <Cards 
        cardNumber={cardNumber}
        date={date}
        cvc={cvc}
        name={name}
        />

        <div className='form'>
          {!confirmed && <Form 
            cardNumber={cardNumber}
            date={date}
            cvc={cvc}
            name={name}
            setConfirmed={setConfirmed}
            setName={setName}
            setCardNumber={setCardNumber}
            setDate={setDate}
            setCvc={setCvc}
          />}
          
          {confirmed && <ThankYou setConfirmed={setConfirmed} />}
          
        </div>
      </div>
    
    </>
  )
}

export default App