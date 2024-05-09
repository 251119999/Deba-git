import React, { useState } from 'react'
import './Card5details.css'

export default function Card5details() {
  const [isopen5,setIsopen5]= useState(true);
  let Input5=document.getElementById('quantity5');
  let Inp13=document.getElementById('gpay5');
  let Inp14=document.getElementById('net5');
  let Inp15=document.getElementById('cash5');
  if(!isopen5 && Input5.value!=='' &&  (Inp13.checked===true || Inp14.checked===true || Inp15.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  return (
    <>
     <div className='container5'>
        <p id='item5'><b>ITEM: </b>PARATHA</p>
        <div id='quant5'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity5" />
        </div>
        <h3 id='payment5'>PAYMENT METHOD</h3>
        <div id='radio13'>
        <input type="checkbox" name="" id="gpay5" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio14'>
        <input type="checkbox" name="" id="net5" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio15'>
        <input type="checkbox" name="" id="cash5" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord5' onClick={()=>{
          setIsopen5(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    </>
  )
}
