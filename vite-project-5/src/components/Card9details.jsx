import React, { useState } from 'react'
import './Card9details.css'

export default function Card9details() {
  const [isopen9,setIsopen9]= useState(true);
  let Input9=document.getElementById('quantity9');
  let Inp25=document.getElementById('gpay9');
  let Inp26=document.getElementById('net9');
  let Inp27=document.getElementById('cash9');
  if(!isopen9 && Input9.value!=='' &&  (Inp25.checked===true || Inp26.checked===true || Inp27.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  return (
    <>
     <div className='container9'>
        <p id='item9'><b>ITEM: </b>MUTTON CHAP</p>
        <div id='quant9'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity9" />
        </div>
        <h3 id='payment9'>PAYMENT METHOD</h3>
        <div id='radio25'>
        <input type="checkbox" name="" id="gpay9" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio26'>
        <input type="checkbox" name="" id="net9" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio27'>
        <input type="checkbox" name="" id="cash9" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord9' onClick={()=>{
          setIsopen9(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    </>
  )
}
