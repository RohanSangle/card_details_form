import React from 'react'
import './App.css'
import bgDesktop from './images/bg-main-desktop.png'
import bgMobile from './images/bg-main-mobile.png'
import cardlogo from './images/card-logo.svg'

function App() {
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
            <img src={cardlogo} alt='' />
            <div >
              <h2 className='cardnumber'>0000 0000 0000 0000</h2>
              <ul className='credentials'>
                <h3>Rohan Sangle</h3>
                <h3>00/0000</h3>
              </ul>
            </div>
          </article>
          <article className='backcard'>
            <p className='backcredentials'>123</p>
          </article>
        </div>

        <div className='form'>
          <form>
            <div >
              <label>Cardholder Name</label>
              <input type="text" placeholder="eg. Rohan Sangle "/>
            </div>
            <div>
              <label>Card Number</label>
              <input type="text" placeholder="eg. 9591 6489 6389 1013" maxLength={19}/>
            </div>

            <article className='expiry'>
              <div >
                <label>Exp. date (MM/YY)</label>
                <input type="month" placeholder="MM YY"/>
              </div>
              <div >
                <label>Cvc</label>
                <input type="number" placeholder="eg. 123 "/>
              </div>
            </article>
            <div >
              <button type="submit" className="confirm_btn">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default App