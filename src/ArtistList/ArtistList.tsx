import React from 'react';
import ListItem from './ListItem';
import { Artist } from '../types';



export interface Props {
   apiArtist : { id : string, 
                names : string,  
                imageUrl : string }[] 
}





function ArtistList ({ apiArtist } : Props) {
    const mapList = apiArtist.map((artist : Artist) => (
        <ListItem key={artist.id} artist={artist} alt="" discription="Artist" />
    ));

    return <ul className="ArtistList">{mapList}</ul>;
}

export default ArtistList;
