import React from 'react';
import style from './styles.module.scss';

const Loader = () => {
  return (
    <div className={style.loader__container}>
      <span className={style.loader}>&nbsp;</span>
    </div>
  );
};

export default Loader;
