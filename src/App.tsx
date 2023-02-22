
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Split from 'react-split';
import { useDebounce } from './Hooks';
import Content from './Layouts';
import Header from './Layouts/';
import Footer from './Layouts/';
import NavBar from './Layouts/';
import NoPageFound from './Pages/NoPageFound';
import { getCurrentTime } from './Hooks';
import { Artist, ArtistData } from './types';
import './Styles/App.css';

const object = {
    function : function x() {
        console.log('2137')
    }
}


class Halko {

    function() {

        console.log('2137')
    }
}

const halko1 = new Halko()
halko1.function()


function App() {


    const clientID = 'd81320b01d024da895d39cf6a0b124f8';
    const clientSecret = 'f161f85b3815465888289eb806ece9ab';
    const baseSpotifyURL = 'https://api.spotify.com/v1';
    
    const [apiToken, setApiToken] = useState<string | null >(null);
    const [errorMessage, setErrorMessage] = useState<string | null >(null);
    const [artists, setArtists] = useState <Artist[]>  ([]);
    const [searchInput, setSearchInput] = useState<string>('');
    const [restApiToken, setRestApiToken] = useState<boolean| null>(null);
    const [getArtistUsed, setgetArtistUsed] = useState<boolean>(false);
    
    const currentDate: Date = new Date();
    const [currentHour, setCurrentHour] = useState<number>(currentDate.getHours());

    const debounceDeley =  500
    const debouncedSearchTerm: string = useDebounce(searchInput , debounceDeley);
    
 // stworzenie klasy ApiClient - Przechowywanie i odswiezanie credentials, wykonywanie requestow. 
 // stworzenie generycznego ApiClient. 
    const fetchToken  = async () => {
        try {
            const response = await fetch(
                'https://accounts.spotify.com/api/token',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded',
                    },
                    body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`,
                }
            );

            if (!response.ok) {
                throw new Error('Could not get the access token!');
            }

            const { access_token: accessToken } : { access_token: string } = await response.json();
            setApiToken(accessToken);
        } catch (error: any) {
            setErrorMessage(error.message);
            setRestApiToken(true);
        }
    };

    


    const mapArtistDTOtoArtist = (artist: ArtistData) : Artist => {
        const doesImageExist =
            artist.images?.length > 2 && artist.images[2]?.url;
        const blackSquareImage =
            'https://i.scdn.co/image/ab6761610000f178867008a971fae0f4d913f63a';
        return {
            id: artist.id,
            names: artist.name,
            imageUrl: doesImageExist ? artist.images[2].url : blackSquareImage,
        };
    };

    const getArtist = async () => {
        try {
            setErrorMessage(null);
            setRestApiToken(false);
            const response = await fetch(
                `${baseSpotifyURL}/search?q=${searchInput}&type=artist`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiToken}`,
                    },
                }
            );
            
            if (!response.ok) {
                throw new Error('Please reload the app');
            }

            const artistsDTO: any = await response.json();
            if (!Array.isArray(artistsDTO.artists?.items)) {
                throw new Error(
                    'Something went wrong when fetching data from Spotify API'
                );
            }
            
            const aritistList = artistsDTO.artists.items.map(mapArtistDTOtoArtist);

            setArtists(aritistList);
            setgetArtistUsed(true);
        } catch (error: any ) {
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {
          const intervalID = getCurrentTime(setCurrentHour);
          
          return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        if (restApiToken === false) {
            return;
        }
        fetchToken();
        setCurrentHour(Number(new Date().getHours()));
    }, [restApiToken]);

    useEffect(() => {
        if (!debouncedSearchTerm) {
            return;
        }

        getArtist();
    }, [debouncedSearchTerm]);

    return (
        <div className="App">
            <Split
                className="Split"
                cursor="col-resize"
                sizes={[20, 80]}
                minSize={100}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="vertical"
            >
                <NavBar />
                {errorMessage && <p>{errorMessage}</p>}

                <div className="mainBox">
                    <Routes>
                        <Route
                            path='/'
                            element={
                                    [
                                    <Header
                                        setSearchInput={setSearchInput}
                                        searchInput={searchInput}
                                        mainClassName='headerHome'
                                    />,
                                    <Content
                                        currentHour={currentHour}
                                        apiArtist={artists}
                                        searchInput={searchInput}
                                        getArtistUsed={getArtistUsed}
                                    />
                                    ]
                            }
                        />
                  
                        <Route
                            path="/search"
                            element={
                                    [
                                    <Header
                                        setSearchInput={setSearchInput}
                                        searchInput={searchInput}
                                        mainClassName='headerSearch'
                            
                                    />,
                                    <Content
                                        currentHour={currentHour}
                                        apiArtist={artists}
                                        searchInput={searchInput}
                                        getArtistUsed={getArtistUsed}
                                    />
                                    ]
                            }
                        />
                        <Route 
                            path='/collection/playlists'
                            element={
                                [
                                    <Header
                                        setSearchInput={setSearchInput}
                                        searchInput={searchInput}
                                        mainClassName='headerCollection'
                                    />,
                                    <Content
                                        currentHour={currentHour}
                                        apiArtist={artists}
                                        searchInput={searchInput}
                                        getArtistUsed={getArtistUsed}
                                    />
                                    ]

                            } />


                        <Route path='*' element={<NoPageFound />}/>
                    </Routes>
                    <Footer />
                </div>
            </Split>
        </div>
    );
}

export default App;

