import React from 'react';


interface Props {
    id : string, 
    names : string
    placeholder : string,
    handleOnChangeInput : (e: React.ChangeEvent<HTMLInputElement>) => void,
    type : string,
    searchInput : string 


}




function Input({
    id,
    names,
    placeholder,
    handleOnChangeInput,
    type,
    searchInput,
} : Props) {
    return (
        <input
            name={names}
            placeholder={placeholder}
            onChange={handleOnChangeInput}
            type={type}
            id={id}
            value={searchInput}
        />
    );
}

export default Input;
