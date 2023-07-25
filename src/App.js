import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import './App.css'
import bgDesktop from './images/bg-main-desktop.png'
import bgMobile from './images/bg-main-mobile.png'
import cardlogo from './images/card-logo.svg'
import tick from './images/icon-complete.svg'

function App() {
  const[confirmed, setConfirmed] =useState(false)
  const[name, setName]=useState("")
  const[cardNumber, setCardNumber]=useState("")
  const[date, setDate]=useState("")
  const[cvc, setCvc]=useState("")
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
    <section>
      <div className="container">
        <picture>
          <source media="(min-width: 1024px)" srcSet={bgDesktop}/>
          <img src={bgMobile} alt=''/> 
        </picture>
      </div>


      <div>
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

        <div className='form'>
          {!confirmed && (
            <form onSubmit={handleSubmit(onSubmit)}>
            <div >
              <label>Cardholder Name</label>
              <input name="cardholder_name" id='cardholder_name' type="text" placeholder="eg. Rohan Sangle " value={name} onChange={(e)=>setName(e.target.value)}/>  
              {/* {...register('cardholder_name', {required:true})} */}
              {/* {errors.cardholder_name && <span>This field is required</span>} */}
            </div>
            <div>
              <label>Card Number</label>
              <input id='card_number' type="text" placeholder="eg. 9591 6489 6389 1013" maxLength={19} required value={cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()} onChange={(e)=>setCardNumber(e.target.value)}/>
            </div>

            <article className='expiry'>
              <div >
                <label>Exp. date (MM/YY)</label>
                <input id='month_year' type="month" placeholder="MM YY" required value={date} onChange={(e)=>setDate(e.target.value)}/>
              </div>
              <div >
                <label>Cvc</label>
                <input id='cvc' type="number" placeholder="eg. 123 " maxLength={3} required value={cvc} onChange={(e)=>setCvc(e.target.value)}/>
              </div>
            </article>
            <div >
              <button type='submit' onClick={()=> setConfirmed(true)} className="btn">Confirm</button>
            </div>
          </form>
          )}
          
          {confirmed && <ThankYou setConfirmed={setConfirmed} />}
          
        </div>
      </div>
    </section>
    </>
  )
}

function ThankYou({setConfirmed}){
  return(
    <>
      <div className='thankyouform'>
        <img src={tick} alt='' className='tickblock'/>
        <h1 className='Thank'>Thank You!</h1>
        <p>We've added your card details</p>
        <button onClick={()=> setConfirmed(false)} className='btn2'>Continue</button>
      </div>

    </>

  )
}

export default App