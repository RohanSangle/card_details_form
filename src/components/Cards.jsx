import React from 'react'
import '../styles/cards.css'
import cardlogo from '../images/card-logo.svg'

function Cards({cardNumber,date,cvc,name}) {
  return (
    <div className="cards">
        <article className='frontcard'>
        <img src={cardlogo} alt='' className='cardlogo' />
        <div >
            <h2 className='cardnumber'>{cardNumber}</h2>
            <ul className='credentials'>
                <h3 className='flex'>{name}</h3>
                <h3 className='noflex'>{date}</h3>
            </ul>
        </div>
        </article>
        <article className='backcard'>
        <p className='backcredentials'>{cvc}</p>
        </article>
    </div>
  )
}

export default Cards