import React from 'react';

import './AnimalCard.scss';

const AnimalCard = ({photo, age, name}) => {
    return (
        <div className='AnimalCard'>
            <img src={photo} className='AnimalCard__image'></img>
            <div className='AnimalCard__info'>
                <h3 className='AnimalCard__name'>{ name }</h3>
                <p>{ age }</p>
            </div>
        </div>
    );
};

export default AnimalCard;
