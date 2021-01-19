import React from 'react'

const CategoryButtons = ({styleClass, value}) => (
    <button className={`btn ${styleClass}`}>
        {value}
    </button>
);

export default CategoryButtons
