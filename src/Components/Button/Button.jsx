import React from 'react'

function Button({ type, title, disable, onClick }) {
    return (
        <button className={` p-2 text-lg text-center border-0 outline-none rounded-md w-28 ml-4 shadow-md cursor-pointer active:scale-95
        ${(type === 'add' && 'bg-yellow-300 hover:bg-yellow-400') ||
            (type === 'remove' && 'bg-red-500 hover:bg-red-600') ||
            (type === 'checkout' && 'bg-green-400 w-32 hover:bg-green-500')
            }`}
            disabled={disable}
            onClick={onClick}
        >{title}</button>
    )
}

export default Button