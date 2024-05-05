import React from 'react'
import { useForm } from "react-hook-form";
import '../styles/form.css'

const Form = ({setConfirmed,setName,setCardNumber,setDate,setCvc,name,cardNumber,date,cvc}) => {
    const form = useForm();
    const {register,handleSubmit,formState} = form;
    const {errors} = formState

    const onSubmit = (data) =>{
        console.log("Form submitted", data );
        setConfirmed(true);
    }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div >
                <label>Cardholder Name</label>
                <input 
                    name="cardholder_name" 
                    id='cardholder_name' 
                    type="text" 
                    placeholder="eg. Rohan Sangle " 
                    value={name} 
                    {...register("cardholder_name",{
                        required:{
                            value:true,
                            message:"*name required"
                        }
                    })}
                    onChange={(e)=>setName(e.target.value)}
                />
                <p>{errors.cardholder_name?.message}</p>  
                
            </div>
            <div>
                <label>Card Number</label>
                <input 
                    id='card_number' 
                    type="text" 
                    placeholder="eg. 9591 6489 6389 1013" 
                    maxLength={19} 
                    value={cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()} 
                    {...register("card_number",{
                        required:{
                            value:true,
                            message:"*Card number is required"
                        }
                    })}
                    onChange={(e)=>setCardNumber(e.target.value)}
                />
                <p>{errors.card_number?.message}</p>
            </div>

            <article className='expiry'>
                <div >
                    <label>Exp. date (MM/YY)</label>
                    <input 
                        id='month_year' 
                        type="month" 
                        placeholder="MM YY" 
                        value={date} 
                        {...register("month_year",{
                            required:{
                                value:true,
                                message:"*Expiry date required"
                            }
                        })}
                        onChange={(e)=>setDate(e.target.value)}
                    />
                    <p>{errors.month_year?.message}</p>
                </div>
                <div >
                    <label>Cvc</label>
                    <input 
                        id='cvc' 
                        type="number" 
                        placeholder="eg. 123 " 
                        maxLength={3} 
                        value={cvc} 
                        {...register("cvc",{
                            required:{
                                value:true,
                                message:"*cvc required"
                            }
                        })}
                        onChange={(e)=>setCvc(e.target.value)}
                    />
                    <p>{errors.cvc?.message}</p>
                </div>
            </article>
            <div >
                <button type='submit' className="btn">Confirm</button>
            </div>
        </form>
    </div>
    
  )
}

export default Form