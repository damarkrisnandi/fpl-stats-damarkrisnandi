import React from 'react';
const Button = (props) => {
    return ( 
        <button type="button" 
            className="
            transform
            rounded-xl
            text-sm
            bg-violet-700 hover:bg-violet-300/100
            text-white hover:text-violet-700
            drop-shadow-md
            px-5 py-3 hover:scale-105
            transition duration-300 ease-in-out"
            onClick={(event) => {props.onClick(event)}}
            >
            { props.label }
        </button>
     );
}
 
export default Button;