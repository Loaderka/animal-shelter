import React from 'react';

import Header from '../../../../components/Header';
import Content from '../Content';
import History from '../History';
import AnimalsCarousel from '../AnimalsCarousel';

const Page = () => {
  return (
    <>
      <Header/>
      <Content/>
      <History/>
      <AnimalsCarousel/>
    </>
  );
};

export default Page;
