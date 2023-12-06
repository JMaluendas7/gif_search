import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [InputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(InputValue.trim().length <= 0) return;

        // setCategories( categories => [ InputValue, ...categories]);
        onNewCategory( InputValue.trim());
        setInputValue('');
    }
    return (
        <section className='container'>
            <form onSubmit={ onSubmit } className='main__form'>
                <input className='main__input' type="text" value={ InputValue } onChange={ onInputChange } required></input>
                <label className='input__label'>
                    <span className='input__text'>Buscar gifs...</span>
                </label>
            </form>
        </section>
    )
}