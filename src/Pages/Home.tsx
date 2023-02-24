import React from 'react'
import { Header, Content} from '../Layouts'
import { Artist } from '../types'

interface Props {
    apiArtist : Artist[],
    searchInput : string,
    currentHour : number , 
    getArtistUsed : boolean,
    setSearchInput : React.Dispatch<React.SetStateAction<string>>,
    mainClassName : string 
}



function Home({apiArtist,searchInput,currentHour,getArtistUsed,setSearchInput,mainClassName}: Props) {
  return (
  <>
    <Header
    setSearchInput={setSearchInput}
    searchInput={searchInput}
    mainClassName={mainClassName}
/>
<Content
    currentHour={currentHour}
    apiArtist={apiArtist}
    searchInput={searchInput}
    getArtistUsed={getArtistUsed}
/>
</>
  )
}

export default Home