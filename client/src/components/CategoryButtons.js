import React from 'react'

const CategoryButtons = ({styleClass, value, onClick}) => (
    <button onClick={onClick}
    className={`btn ${styleClass}`}>
        {value}
    </button>
);

export default CategoryButtons
