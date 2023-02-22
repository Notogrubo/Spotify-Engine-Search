import React from 'react';
import ListItem from './ListItem';



  
interface Props <T> {
    apiArtist : T[]
}




function ArtistList <T extends { names: string; imageUrl: string; id: string; }>({ apiArtist } : Props<T>) {
    const mapList = apiArtist.map((artist : T) => (
        <ListItem key={artist.id} artist={artist} alt="" discription="Artist" />
    ));

    return <ul className="ArtistList">{mapList}</ul>;
}

export default ArtistList;
