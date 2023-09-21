import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../helpers/useFecthGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);
    
    // const getImages = async() => {
    //     const getGifsObject = await getGifs( category );
    //     setImages(getGifsObject);
    // }

    // useEffect( () => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h3>Cargando...</h3>)
            }
            <div className='card-grid'>
                {
                    images.map( ( images ) =>
                    
                        <GifItem
                            key={ images.id }
                            { ...images } />
                    )
                }
            </div>        
        </>
    )
    
}
