import React from 'react';
import Carousel, { Item } from 'react-grid-carousel';
import NewsCard from '../../../../components/NewsCard';

import { NEWS_CARUSEL } from './consts';
import './News.scss';

const News = () => {
  return (
    <div className='News'>
        <Carousel
            cols={3}
            rows={1}
            loop
            className='News__carousel'
            numberOfItemToScroll={1}
        >
            {NEWS_CARUSEL.map((item, index) => (
                <Item key={index}>
                    <NewsCard {...item} />
                </Item>
            ))}
        </Carousel>
        </div>
  );
};

export default News;
