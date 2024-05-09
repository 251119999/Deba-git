import React, { useState } from 'react'
import './Card6details.css'


export default function Card6details() {
  const [isopen6,setIsopen6]= useState(true);
  let Input6=document.getElementById('quantity6');
  let Inp16=document.getElementById('gpay6');
  let Inp17=document.getElementById('net6');
  let Inp18=document.getElementById('cash6');
  if(!isopen6 && Input6.value!=='' &&  (Inp16.checked===true || Inp17.checked===true || Inp18.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  return (
    <>
     <div className='container6'>
        <p id='item6'><b>ITEM: </b>FISH FRY</p>
        <div id='quant6'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity6" />
        </div>
        <h3 id='payment6'>PAYMENT METHOD</h3>
        <div id='radio16'>
        <input type="checkbox" name="" id="gpay6" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio17'>
        <input type="checkbox" name="" id="net6" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio18'>
        <input type="checkbox" name="" id="cash6" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord6' onClick={()=>{
          setIsopen6(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    </>
  )
}
