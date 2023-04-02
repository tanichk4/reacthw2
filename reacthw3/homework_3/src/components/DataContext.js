import React from 'react';
import { useEffect, useState } from "react"

export const DataContext = React.createContext();

export const DataProvider = (props) => {
    const [albums, setAlbums] = useState([])
        useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(json => setAlbums(json))
        .catch(error => {
            throw(error);
        })
        }, [])

    return (
        <>            
         <DataContext.Provider value={albums}>
            {props.children}
        </DataContext.Provider>
        </>
    )
}

