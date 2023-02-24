import React from 'react';
import '../Styles/Header.css';
import { IoMdLogIn } from 'react-icons/io';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';
import { Form } from '../Componets';
import { Button } from '../Componets';

interface Props {
    setSearchInput : React.Dispatch<React.SetStateAction<string>>,
    searchInput : string,
    mainClassName : string 
}

function Header({ setSearchInput, searchInput, mainClassName } : Props) {
    return (
        <div className={mainClassName}>
            <div className="left-header-contianer">
                <TfiArrowCircleLeft size="30px" role="button" />
                <TfiArrowCircleRight size="30px" role="button" />    
                {mainClassName === 'headerSearch' && (<Form
                    setSearchInput={setSearchInput}
                    searchInput={searchInput}
                />)}  
                {mainClassName === 'headerCollection' && (   
                <div className='buttonContainer'>
                <Button className='headerButton' type='button' text='PlayList' />
                <Button className='headerButton' type='button' text='Podcasts' />
                <Button className='headerButton' type='button' text='Audiobooks' />
                <Button className='headerButton' type='button' text='Artists' />
                <Button className='headerButton' type='button' text='Albums' />
                </div>
             )}
              
            </div>

            <div className="right-header-container">
                <IoMdLogIn size="30px" role="button" />
            </div>
        </div>
    );
}


export default Header;
