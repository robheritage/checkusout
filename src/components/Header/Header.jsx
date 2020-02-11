import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <strong>Checkusout.com</strong>
      <nav className={style.header__nav} role="navigation">
        <Link to="/">Reviews</Link>&nbsp;&nbsp;
        <Link to="/add-review">Review Us</Link>&nbsp;
      </nav>
    </header>
  );
};

export default Header;
