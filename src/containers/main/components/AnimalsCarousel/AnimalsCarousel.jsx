import React from 'react';
import Carousel, { Item } from 'react-grid-carousel';
import AnimalCard from '../../../../components/AnimalCard';

import './AnimalsCarousel.scss';
import { ANIMALS_CARUSEL } from './consts';

const AnimalsCarousel = () => {
    return (
        <div className='Animals'>
            <Carousel
                cols={4}
                rows={1}
                loop
                className='Animals__carousel'
                numberOfItemToScroll={1}
            >
                {ANIMALS_CARUSEL.map((item, index) => (
                    <Item key={index}>
                        <AnimalCard {...item} />
                    </Item>
                ))}
            </Carousel>
            <div className='Animals__wrapper'>
                <a className='Animals__button Button Button_blue'>
                    Смотреть всех
                </a>
            </div>
        </div>
    );
};

export default AnimalsCarousel;
