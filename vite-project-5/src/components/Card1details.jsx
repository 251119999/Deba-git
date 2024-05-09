import React, { useState } from 'react'
import './Card1details.css'

export default function Card1details() {
  const [isopen1,setIsopen1] =useState(true);
  let Input1=document.getElementById('quantity1');
  let Inp1=document.getElementById('gpay1');
  let Inp2=document.getElementById('net1');
  let Inp3=document.getElementById('cash1');
  if(!isopen1 && Input1.value!=='' &&  (Inp1.checked===true || Inp2.checked===true || Inp3.checked===true)) return <h2 style={{color:'green'}}>ORDER IS SUCCESFULL.....WILL BE DELIVERED SHORTLY</h2>
  return (
    <>
    <div className='container1'>
        <p id='item1'><b>ITEM: </b>BURGER</p>
        <div id='quant1'>
        <label htmlFor="quantity">QUANTITY: </label>
        <input type="text" name="" id="quantity1" />
        </div>
        <h3 id='payment1'>PAYMENT METHOD</h3>
        <div id='radio1'>
        <input type="checkbox" name="" id="gpay1" />
        <label htmlFor="gpay">GOOGLE PAY</label>
        </div>
        <div id='radio2'>
        <input type="checkbox" name="" id="net1" />
        <label htmlFor="net">NET BANKING</label>
        </div>
        <div id='radio3'>
        <input type="checkbox" name="" id="cash1" />
        <label htmlFor="cash">CASH ON DELIVERY</label>
        </div>
        <button id='btnord1' onClick={()=>{
          setIsopen1(false);
        }}>ORDER</button>
    </div>
    <button onClick={()=>{
      history.back();
    }}>BACK</button>
    
    </>
  )
}
