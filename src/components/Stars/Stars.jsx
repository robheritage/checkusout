import React from 'react';
import classnames from 'classnames';
import style from './styles.module.scss';

const Stars = ({ count, className, ...props }) => {
  return (
    <span className={classnames(style.stars, className)} {...props}>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={classnames(style.stars__star, {
          [style.stars__star__blank]: i > count,
        })}>&#9733;</span>
      ))}
    </span>
  );
};

export default Stars;
