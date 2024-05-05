import React from 'react'
import '../styles/thankyou.css'
import tick from '../images/icon-complete.svg'

function ThankYou({setConfirmed}) {
  return (
    
    <div className='thankyouform'>
      <img src={tick} alt='' className='tickblock'/>
      <h1 className='Thank'>Thank You!</h1>
      <p>We've added your card details</p>
      <button onClick={()=> setConfirmed(false)} className='btn2'>Continue</button>
    </div>

  )
}

export default ThankYou