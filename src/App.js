import { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
const {getData} = require("./db/db");
const foods = getData();
// const userData = window.Telegram.WebApp;
function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (item) => {
    const exist = cartItems.find((x)=>x.id===item.id);
    if(exist)
    {
      setCartItems(
        cartItems.map((x)=>
        x.id===item.id ? { ...exist, quantity:exist.quantity+1}:x
      )
      );
    }
    else
    {
      setCartItems([...cartItems,{...item,quantity:1}]);
    }
    
  };
  const onRemove = (item) =>
  {
    const exist = cartItems.find((x) => x.id === item.id);
    if(exist.quantity===1)
    {
      setCartItems(cartItems.filter(x => x.id!==item.id));
    }
    else
    {
      setCartItems(cartItems.map((x)=>x.id===item.id?{...exist, quantity:exist.quantity-1}:x))
    }
    
    
  }

  return (
    <>
    <div className='text-center text-5xl font-bold'>
    Order food
    </div>
      <Cart cartItems = {cartItems}></Cart>
      <div className='mt-5 w-full h-full flex flex-row flex-wrap'>
   {foods.map(food=>{return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} ></Card>})}
      </div>
    </>
  );
}

export default App;
