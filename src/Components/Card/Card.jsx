import React, { useState } from 'react'
import Button from '../Button/Button';


function Card({ food,onAdd,onRemove }) {
    const [count, setCount] = useState(0);
    const { title, Image, price } = food;
    const increment = () => {
        setCount(count + 1);
        onAdd(food);
    }
    const decrement = () => {
        setCount(count - 1);
        onRemove(food);
    }
    return (
        <div className="theme-border flex flex-col justify w-56 h-56 border-2  p-2 m-4 rounded-md relative">
            <div className={` ${count !== 0 ? 'theme-button theme-button-text font-semibold text-center text-lg hover:scale-95 absolute pt-1 top-0 right-0 w-10 h-10 rounded-full translate-x-5 -translate-y-5' : 'hidden'}`}>{count}</div>
                <div className='w-40 h-40 justify-center mx-5 my-0'>
                <img className='w-full object-cover' src={Image} alt={title} />
                </div>
            <div className='text-lg inline text-center theme-text'>{title}. <div className="font-bold inline-block text-center">${price}</div></div>
            <div className="flex flex-row justify-center">
                <Button type={'add'} title={'+'} onClick={increment}></Button>
                {count > 0 ? (
                    <Button type={'remove'} title={'-'} onClick={decrement}></Button>
            ):null}
            </div>
        </div>
    )
}

export default Card