import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import style from './styles.module.scss';

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on location change so you see your new review at the top of the list!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
