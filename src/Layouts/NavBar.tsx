import React from 'react';
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom'
import { BsPlusSquare, BsSuitHeartFill, BsBookmarkFill } from 'react-icons/bs';
import { FiArrowDownCircle } from 'react-icons/fi';

interface  BestplayList{
    names : string, 
    id : number 
}

function NavBar() {

    const linkStyle = {
        textDecoration: "none",
        color: 'white'
      };

    const array2137: BestplayList[] = [
        {
            names: 'Top 100 Best Disco-polo!',
            id: 1,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 2,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 3,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 4,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 5,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 6,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 7,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 8,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 9,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 10,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 11,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 12,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 13,
        },
        {
            names: 'Top 100 Best Disco-polo!',
            id: 14,
        },
    ];

    return (
        <div className="NavBar">
            <div className="navBarMenu-1">
                <img
                    src={`${process.env.PUBLIC_URL}/SpotifyLogo.png`}
                    className="SpotifyLogo"
                    alt="logo"
                />
            </div>
            <div className="navBarMenu-2">
                <Link to='/' style={linkStyle}>
                <div className="iconsNavBar" >
                    <img src="/Home.svg" alt="HomeIcon" className="imgNav" />
                    <p>Home</p>
                </div>
                </Link>
                <Link to='/search' style={linkStyle} >
                <div className="iconsNavBar">
                    <img
                        src="/Search.svg"
                        alt="SearchIcon"
                        className="imgNav"
                    />
                    <p>Search</p>
                </div>
                </Link>
                <Link to='/collection/playlists' style={linkStyle} >
                <div className="iconsNavBar">
                    <img
                        src="/library.svg"
                        alt="libraryIcon"
                        className="imgNav"
                    />
                    <p>Your Library</p>
                </div>
                </Link>
            </div>

            <div className="navBarMenu-2">
                <div className="iconsNavBar">
                    <BsPlusSquare role="button" size={20} />
                    <p>Create Playlist</p>
                </div>
                <div className="iconsNavBar">
                    <BsSuitHeartFill size={20} role="button" />
                    <p>Liked Songs</p>
                </div>
                <div className="iconsNavBar">
                    <BsBookmarkFill size={20} role="button" />
                    <p>Your Episodes</p>
                </div>
            </div>
            <div className="navBarMenu-3">
                {array2137.map((item: BestplayList)  => (
                    <p className="itemPlayList" key={item.id}>
                        {item.names}
                    </p>
                ))}
            </div>
            <div className="navBarInstallAppBox">
                <FiArrowDownCircle size="30px" role="button" />
                <p className="itemPlayList">Install App</p>
            </div>
        </div>
    );
}

export default NavBar;
