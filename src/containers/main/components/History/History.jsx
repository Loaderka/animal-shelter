import React from 'react';

import {HISTORY_TEXT} from './consts';

import './History.scss';

const History = () => {
  return (
    <div className='History container'>
      <span>{ HISTORY_TEXT }</span>
    </div>
  );
};

export default History;
