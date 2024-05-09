import React, { useState } from 'react'
import './Card8details.css'

export default function Card8details() {
  const [isopen8,setIsopen8]= useState(true);
  let Input8=document.getElementById('quantity8');
  let Inp22=document.getElementById('gpay8');
  let Inp23=document.getElementById('net8');
  let Inp24=document.getElementById('cash8');
  if(!isopen8 && Input8.value!=='' &&  (Inp22.checked===true || Inp23.checked===true || Inp24.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  return (
    <>
     <div className='container8'>
        <p id='item8'><b>ITEM: </b>CHILI CHICKEN</p>
        <div id='quant8'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity8" />
        </div>
        <h3 id='payment8'>PAYMENT METHOD</h3>
        <div id='radio22'>
        <input type="checkbox" name="" id="gpay8" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio23'>
        <input type="checkbox" name="" id="net8" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio24'>
        <input type="checkbox" name="" id="cash8" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord8' onClick={()=>{
          setIsopen8(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    </>
  )
}
