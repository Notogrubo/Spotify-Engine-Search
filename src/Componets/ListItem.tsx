import React from 'react';

interface Props {
    artist : {
        names : string,
        imageUrl : string,
        id : string
    },
    alt : string,
    discription : string 

}

function ListItem({ artist, alt, discription } : Props) {
    const { names, imageUrl } = artist;
    return (
        <li className="ListItem">
            <img className="imgItemList" src={imageUrl} alt={alt} />
            <span className="nameItemList">{names}</span>
            <p className="discriptionList">{discription}</p>
        </li>
    );
}
export default ListItem;
