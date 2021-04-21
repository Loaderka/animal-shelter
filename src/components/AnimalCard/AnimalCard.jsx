import React from 'react';

import AwesomeSlider from 'react-awesome-slider';

import './AnimalCard.scss';

const AnimalCard = ({photos, age, name}) => {
    return (
        <div className='AnimalCard'>
            <div className='AnimalCard__container'>
                {photos.map((photo, index) => <img key={index} src={photo} className='AnimalCard__image'/>)}
            </div>
            <div className='AnimalCard__info'>
                <h3 className='AnimalCard__name'>{ name }</h3>
                <p>{ age }</p>
            </div>
        </div>
    );
};

export default AnimalCard;
