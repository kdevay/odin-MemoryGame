import React from 'react';

export default function Tile(props) {
    const {handleClick, clicked, index, name, source, alt} = props;

    return(
        <div className='tile'>
            <img onClick={handleClick} data={clicked} index={index} className='tileImages' src={source} alt={alt}></img>
        </div>
    )
}