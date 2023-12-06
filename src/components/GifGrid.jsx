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

    let id = 1;

    const onDeleteCategory = ( category ) => {
        images[category] = []
    }

    return (
        <>
            <div className='text__category'>
                <h3 className='category'>{ category }</h3>
                <div className='category__img'>
                    <button className='img' onClick={ onDeleteCategory( category ) }></button>
                </div>
            </div>
            {
                isLoading && (<h3>Cargando...</h3>)
            }
            <section className='card-grid'>
                {
                    images.map( ( images ) =>
                    
                        <GifItem
                            key={ images.id }
                            { ...images } />
                    )
                }
            </section>        
        </>
    )

    id += 1;
    
}
