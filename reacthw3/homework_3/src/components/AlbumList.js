
import React, { useContext} from "react";
import { DataContext } from "./DataContext";

const AlbumList = () => {
    const albums = useContext(DataContext)
    return (
        <div>
            {albums?.map((album, index) => (
                <div key={album.id}>
                    {album.id} - {index} - {album.title}
                </div>
            ))}
        </div>
    )
}

export default AlbumList