import React from 'react';

import './HelpCard.scss';

const HelpCard = ({title, text}) => {
    return (
        <div className='HelpCard'>
            <h4 className='HelpCard__title'>
                {title}
            </h4>
            <p className='HelpCard__text'>
                {text}
            </p>
        </div>
    );
};

export default HelpCard;
