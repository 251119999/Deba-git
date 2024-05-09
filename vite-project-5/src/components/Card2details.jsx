import React, { useState } from 'react'
import './Card2details.css'

export default function Card2details() {
  const [isopen2,setIsopen2]= useState(true);
  let Input2=document.getElementById('quantity2');
  let Inp4=document.getElementById('gpay2');
  let Inp5=document.getElementById('net2');
  let Inp6=document.getElementById('cash2');
  if(!isopen2 && Input2.value!=='' &&  (Inp4.checked===true || Inp5.checked===true || Inp6.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>

  
  return (
    <>
    <div className='container2'>
        <p id='item2'><b>ITEM: </b>NOODLES</p>
        <div id='quant2'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity2" />
        </div>
        <h3 id='payment2'>PAYMENT METHOD</h3>
        <div id='radio4'>
        <input type="checkbox" name="" id="gpay2" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio5'>
        <input type="checkbox" name="" id="net2" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio6'>
        <input type="checkbox" name="" id="cash2" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord2' onClick={()=>{
          setIsopen2(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    
    </>
  )
}
