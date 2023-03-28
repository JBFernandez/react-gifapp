import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {        
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', inputValue);
        //we make the callback to setCategories
        //we could also send the categories as a prop

        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]);
            setInputValue("");
        }
    }

  return (
        <form onSubmit={ handleSubmit }> {/*form would be the grouping element, we dont need the fragment */}
            <p> { inputValue } </p>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange } //e is the event
            /> {/* input */}
        </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
