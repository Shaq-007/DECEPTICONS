import React from 'react'

const CategoryButtons = ({styleClass, value, onClick}) => (
    <button 
    className={`btn ${styleClass}`} 
    onClick={(event: MouseEvent<HTMLButtonElement> ) => onClick(event)}>
        {value}
    </button>
);

export default CategoryButtons
