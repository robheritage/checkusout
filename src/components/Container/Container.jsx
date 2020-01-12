import React from 'react';
import style from './styles.module.scss';

const Container = ({ children, ...props }) => {
  return (
    <div className={style.container} {...props}>
      { children }
    </div>
  );
};

export default Container;
