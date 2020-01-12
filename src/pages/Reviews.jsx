import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { meanBy } from 'lodash';

import { ReviewContext } from '../contexts/ReviewContext';

import Stars from '../components/Stars';
import StarChart from '../components/StarChart';

const Reviews = () => {
  const { reviews } = useContext(ReviewContext);
  const average = Math.round(meanBy(reviews, r => r.rating));

  return (
    <>
      <Helmet>
        <title>CheckUsOut.com Reviews | Read Customer Reviews of CheckUsOut.com</title>
      </Helmet>
      <div style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
        <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Customer Reviews</h1>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1.5rem' }}>
          {/* Overall Rating */}
          <div style={{ width: '250px', textAlign: 'center', fontSize: '1.5rem' }}>
            <div><strong>{average} / 5</strong></div>
            <Stars count={average} />
          </div>
          {/* Chart */}
          <div style={{ flex: '1 1', paddingLeft: '1rem' }}>
            <StarChart ratings={reviews.map(r => r.rating)} />
          </div>
        </div>
        <p style={{ textAlign: 'center' }}>
          Showing <strong>{reviews.length}</strong> of <strong>{reviews.length}</strong> reviews
        </p>
        {/* List of Reviews */}
        <ul style={{ margin: 0, padding: 0 }}>
          {reviews.map(r => (
            <li key={r.id} style={{ listStyle: 'none', padding: '1.5rem', backgroundColor: 'white', marginBottom: '1rem' }}>
              <h4>{ r.title || `${r.review.replace(/^(.{20}[^\s]*).*/, "$1")}...` }</h4>
              <p>
                <Stars count={r.rating} />
                &nbsp;<strong>{`${r.rating}/5`}</strong></p>
              <p>{r.review}</p>
              <div style={{ display: 'flex', flexDirection: 'row', fontSize: '0.8rem' }}>
                <strong style={{ flex: '1 1', paddingRight: '1rem' }}>{r.name || "Anonymous"}</strong>
                <span style={{ color: 'lightgrey' }}>{r.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
