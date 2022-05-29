import React from 'react'

function Button({ type, title, disable, onClick }) {
    return (
        <button className={`theme-button theme-button-text p-2 text-lg text-center border-0 outline-none rounded-md w-28 ml-4 shadow-md cursor-pointer active:scale-95
        `}
            disabled={disable}
            onClick={onClick}
        >{title}</button>
    )
}

export default Button