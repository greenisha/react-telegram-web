import React from 'react'

function Cart({cartItems}) {
    console.log(cartItems);
   const  total = cartItems.reduce((y,x)=>y+(x.price*x.quantity),0);
   const count = cartItems.length;
  return (  
    <div>total {count}  ${total.toFixed(2)}</div>
  )
}

export default Cart