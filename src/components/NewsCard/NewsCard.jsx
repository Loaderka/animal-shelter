import React from 'react';

import './NewsCard.scss';

const NewsCard = ({photo, text, title}) => {
    return (
        <div className='NewsCard'>
            <img src={photo} className='NewsCard__image'></img>
            <div className='NewsCard__info'>
                <h3 className='NewsCard__name'>{ title }</h3>
                <p>{ text }</p>
            </div>
        </div>
    );
};

export default NewsCard;
