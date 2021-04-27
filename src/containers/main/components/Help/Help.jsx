import React from 'react';

import {HELP_INFO} from './consts';

import HelpCard from '../../../../components/HelpCard';

import './Help.scss';

const Help = () => {
    return (
        <div className='Help'>
            <div className='container'>
                <h1 className='Help__title'>Как помочь приюту?</h1>
                <p className='Help__subtitle'>
                    В нашем приюте социализацией, выгулом и поиском хозяев занимаются добровольцы-волонтеры, поэтому мы будем очень рады вашей помощи.
                </p>
                <div className='Help__table'>
                    {HELP_INFO.map((item, index) => (
                        <HelpCard 
                            key={index} 
                            title={item.title} 
                            text={item.text}
                        />
                    ))}
                </div>
                <div className='Help__wrapper'>
                    <button className='Help__button Button Button_blue'>
                        Подробнее обо всех видах помощи
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Help;
