import React from 'react';
import logo from '../../images/logo-nav.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className='Header container'>
      <div className='Header__logo'>
        <img src={logo}/>
        <h2 className='Header__text'>Приют<br/> в печатниках</h2>
      </div>
      <ul className='Header__nav'>
        <li>
          <a href='#'>Помочь приюту</a>
        </li>
        <li>
          <a href='#'>Наши подопечные</a>
        </li>
        <li>
          <a href='#'>О нас</a>
        </li>
        <li>
          <a href='#'>Контакты</a></li>
        <li>
          <a href='#'>Волонтеры</a></li>
        <li>
          <a href='#'>FAQ</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
