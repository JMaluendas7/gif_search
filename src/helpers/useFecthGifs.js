import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async() => {
        const getGifsObject = await getGifs( category );
        setImages(getGifsObject);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])
    
    return {
        images,
        isLoading
    }
}

