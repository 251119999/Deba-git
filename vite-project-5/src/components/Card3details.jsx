import React, { useState } from 'react'
import './Card3details.css'

export default function Card3details() {
  const [isopen3,setIsopen3] =useState(true);
  let Input3=document.getElementById('quantity3');
  let Inp7=document.getElementById('gpay3');
  let Inp8=document.getElementById('net3');
  let Inp9=document.getElementById('cash3');
  if(!isopen3 && Input3.value!=='' &&  (Inp7.checked===true || Inp8.checked===true || Inp9.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  
  return (
    <>
     <div className='container3'>
        <p id='item3'><b>ITEM: </b>BIRYANI</p>
        <div id='quant3'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity3" />
        </div>
        <h3 id='payment3'>PAYMENT METHOD</h3>
        <div id='radio7'>
        <input type="checkbox" name="" id="gpay3" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio8'>
        <input type="checkbox" name="" id="net3" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio9'>
        <input type="checkbox" name="" id="cash3" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord3' onClick={()=>{
          setIsopen3(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
        history.back();
    }}>BACK</button>
    
    
    
    </>
  )
}
