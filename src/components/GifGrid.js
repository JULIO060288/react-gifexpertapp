import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    //se renombra poniendo 2 punto
     const {data:imagnes, loading} = useFetchGifs(category);
     
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                    {
                        imagnes.map(img => {
                            return <GifGridItem 
                                        key={img.id} 
                                        {...img} 
                                    />
                        } )
                    }
            </div>
        </>
    )
}
