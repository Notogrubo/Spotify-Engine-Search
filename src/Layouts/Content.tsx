import React from 'react';
import '../Styles/Content.css';

import ArtistList from '../Componets/ArtistList';
import { Artist } from '../types';



interface Props {
    apiArtist : Artist[],
    searchInput : string,
    currentHour : number , 
    getArtistUsed : boolean
}


function Content  ({ apiArtist, searchInput, currentHour, getArtistUsed } : Props ) {

    const aristFound: boolean =  apiArtist.length > 0;
    const hasUserTyped: boolean = searchInput.length > 0;
    const dayTime = currentHour > 15 || currentHour < 2 ? 'Evening' : 'Morning';
    const displayErrorMessageAPI: boolean = apiArtist.length === 0 && hasUserTyped && getArtistUsed;
    const displayWelcomeMessage: boolean = aristFound && hasUserTyped;
    const GoodMessage: string  = `Good ${dayTime}`;
   





    return (
        <div className="Content">
        
            <h2>{displayWelcomeMessage && GoodMessage}</h2>
            {displayErrorMessageAPI && <h4>Artist name not found. Please Try Again.</h4>}

            {aristFound && hasUserTyped && (
                <ArtistList apiArtist={apiArtist} />
            )}
        </div>
    );
}



export default Content;
