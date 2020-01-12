import React from 'react';
import PropTypes from 'prop-types';
import { countBy } from 'lodash';
import Stars from '../Stars';
import style from './styles.module.scss';

const StarChart = ({ ratings }) => {
  const data = countBy(ratings);

  return (
    <div className={style['star-chart']}>
      {[5,4,3,2,1].map(i => (
        <div key={i} className={style['star-chart__item']}>
          <Stars count={i} className={style['star-chart__item__stars']} />
          <div className={style['star-chart__item__bar']}>
            <span
              className={style['star-chart__item__bar__rating']}
              style={{ width: data[i] > 0 ? Math.round((100/ratings.length)*data[i]) : 0 }}
            ></span>
          </div>
          <span className={style['star-chart__item__count']}>{data[i] || 0}</span>
        </div>
      ))}
    </div>
  );
};

StarChart.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default StarChart;
