import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        // Esto se usa para que cuando envie el formulario no se recargue la pagina
        // cuando enviemos el formulario
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories( cats => [ inputValue,...cats  ] );
            setInputValue( '' );
        }

        // console.log('Submit hecho')
        

    }

    return (
        <>
            <p>Ingrese una categoria:</p>
            <form onSubmit= { handleSubmit }>
                <input
                    type='text'
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>
        </>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

