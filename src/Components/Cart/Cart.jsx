import React from 'react'

function Cart({cartItems}) {
    console.log(cartItems);
   const  total = cartItems.reduce((y,x)=>y+(x.price*x.quantity),0);
  return (  
    <div className='theme-text text-lg'>total  ${total.toFixed(2)}</div>
  )
}

export default Cart