import React from 'react';

import Header from '../../../../components/Header';
import Content from '../Content';
import History from '../History';
import AnimalsCarousel from '../AnimalsCarousel';
import Help from '../Help';
import News from '../News';

const Page = () => {
  return (
    <>
      <Header/>
      <Content/>
      <History/>
      <AnimalsCarousel/>
      <Help/>
      <News/>
    </>
  );
};

export default Page;
