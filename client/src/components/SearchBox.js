import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div style= {{ marginTop: "15px", marginBottom: "15px"}}>
            <input 
                type ='search' 
                placeholder='search username' 
                onChange ={searchChange}
            />
        </div>
    );
}

export default SearchBox;