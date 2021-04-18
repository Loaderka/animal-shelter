import React from 'react';

import {b_} from './Header.scss';

const Header = () => {
  return (
    <div className={b_()}>
      <div className='logo'>
        <h2>Приют в печатниках</h2>
      </div>
      <ul className='nav'>
        <li>Помочь приюту</li>
        <li>Наши подопечные</li>
        <li>О нас</li>
        <li>Контакты</li>
        <li>Волонтеры</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
};

export default Header;
