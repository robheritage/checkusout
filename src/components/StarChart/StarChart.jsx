import React from 'react';
import { countBy } from 'lodash';
import Stars from '../Stars';
import style from './styles.module.scss';

const StarChart = ({ ratings }) => {
  const data = countBy(ratings);
  return (
    <ul className={style.chart}>
      {[5,4,3,2,1].map(i => (
        <li key={i} style={{ listStyle: 'none' }}>
          <Stars count={i} /> <span>{data[i] || 0}</span>
        </li>
      ))}
    </ul>
  );
};

export default StarChart;
