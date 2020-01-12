import React from 'react';
import Header from '../Header';
import style from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={style.layout}>
      <Header />
      <div className={style.layout__content}>
        { children }
      </div>
      <footer className={style.layout__footer}>
        &copy; 2020 Checkusout.com
      </footer>
    </main>
  );
};

export default Layout;
