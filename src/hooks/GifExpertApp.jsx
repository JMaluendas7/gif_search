
import { useState } from 'react';
import { AddCategory, GifGrid } from '../components/index';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'JavaScript' ]);
    
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Categoria Agregada ']);
        console.log(categories);
    }

    const onRemoveCategory = ( category ) => {
        
    }

    return (
        <>
            <div className='main'>
                {/* Titulo */}
                <h1 className='main__title'>GifExpertApp</h1>
                <p className='main__subtitle'>Busca el tipo de gifs que desees</p>
            </div>

                {/* Input  */}
                <AddCategory
                onNewCategory={ onAddCategory }
                />
        
            {/* Listado de Gif */}
            {
                categories.map( (category) =>
                    <GifGrid
                        key={ category }
                        category={ category }
                    />

                )
            }
            {/* Gif Item */}
        </>
    )
}

export default GifExpertApp
