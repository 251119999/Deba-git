import React, { useState } from 'react'
import './Card4details.css'

export default function Card4details() {
  const [isopen4,setIsopen4]= useState(true);
  let Input4=document.getElementById('quantity4');
  let Inp10=document.getElementById('gpay4');
  let Inp11=document.getElementById('net4');
  let Inp12=document.getElementById('cash4');
  if(!isopen4 && Input4.value!=='' &&  (Inp10.checked===true || Inp11.checked===true || Inp12.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  return (
    <>
     <div className='container4'>
        <p id='item4'><b>ITEM: </b>MOMO</p>
        <div id='quant4'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity4" />
        </div>
        <h3 id='payment4'>PAYMENT METHOD</h3>
        <div id='radio10'>
        <input type="checkbox" name="" id="gpay4" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio11'>
        <input type="checkbox" name="" id="net4" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio12'>
        <input type="checkbox" name="" id="cash4" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord4' onClick={()=>{
          setIsopen4(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    </>
  )
}
