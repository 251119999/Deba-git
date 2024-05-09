import React, { useState } from 'react'
import './Card7details.css'

export default function Card7details() {
  const [isopen7,setIsopen7]= useState(true);
  let Input7=document.getElementById('quantity7');
  let Inp19=document.getElementById('gpay7');
  let Inp20=document.getElementById('net7');
  let Inp21=document.getElementById('cash7');
  if(!isopen7 && Input7.value!=='' &&  (Inp19.checked===true || Inp20.checked===true || Inp21.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  return (
    <>
     <div className='container7'>
        <p id='item7'><b>ITEM: </b>PIZZA</p>
        <div id='quant7'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity7" />
        </div>
        <h3 id='payment7'>PAYMENT METHOD</h3>
        <div id='radio19'>
        <input type="checkbox" name="" id="gpay7" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio20'>
        <input type="checkbox" name="" id="net7" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio21'>
        <input type="checkbox" name="" id="cash7" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord7' onClick={()=>{
          setIsopen7(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    
    </>
  )
}
