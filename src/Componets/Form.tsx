import React from 'react';
import { CgSearch } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';
import Input from './Input';

interface Props{
    setSearchInput : React.Dispatch<React.SetStateAction<string>>,
    searchInput : string
    
}

function Form({ setSearchInput, searchInput } : Props) {
    const handleOnChangeInput = (e : React.ChangeEvent<HTMLInputElement>): void  => setSearchInput(e.target.value);

    return (
        <form className="Form" onSubmit={(e) => e.preventDefault()}>
            <CgSearch role="img" color="black" size={30} />
            <Input
                id="artistName"
                names="artistName"
                placeholder="What do you want to listen to?"
                searchInput={searchInput}
                handleOnChangeInput={handleOnChangeInput}
                type="text"
            />
            {searchInput.length > 0 && (
                <RxCross1
                    role="button"
                    size={30}
                    color="black"
                    className="inputIconRight"
                    onClick={() => setSearchInput('')}
                />
            )}
        </form>
    );
}

export default Form;
