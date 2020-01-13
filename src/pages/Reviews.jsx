import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { meanBy } from 'lodash';

import { ReviewContext } from '../contexts/ReviewContext';

import { Container, Button, Stars, StarChart, Card } from '../components';

const Reviews = () => {
  const { reviews } = useContext(ReviewContext);
  const average = Math.round(meanBy(reviews, r => r.rating));

  return (
    <>
      <Helmet>
        <title>Checkusout.com Reviews | Read Customer Reviews of Checkusout.com</title>
      </Helmet>
      <Container>
        <h1 className="u-text-center  u-mb-2">Customer Reviews</h1>
        <div className="u-mb-1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {/* Overall Rating */}
          <div className="u-text-center" style={{ flex: '1 1 30%', fontSize: '1.25rem' }}>
            <div><strong>{average} / 5</strong></div>
            <Stars count={average} />
          </div>
          {/* Chart */}
          <div className="u-pl-1" style={{ flex: '1 1 70%' }}>
            <StarChart ratings={reviews.map(r => r.rating)} />
          </div>
        </div>
        <p className="u-text-center">
          Showing <strong>{reviews.length}</strong> of <strong>{reviews.length}</strong> reviews
        </p>

        {/* List of Reviews */}
        <ul className="u-mp-0">
          {reviews.map(r => (
            <Card as="li" key={r.id} className="u-mb-1">
              <Card.Header as="h4" heading={ r.title || `${r.review.replace(/^(.{20}[^\s]*).*/, "$1")}...` } />
              <Card.Content>
                <div className="u-mb-half">
                  <Stars count={r.rating} />
                  &nbsp;<strong>{`${r.rating}/5`}</strong>
                </div>
                { r.review }
              </Card.Content>
              <Card.Footer>
                <div className="u-pr-1" style={{ flex: 1 }}>
                  <strong>{r.name || "Anonymous"}</strong>
                </div>
                <span style={{ color: '#999' }}>{r.date}</span>
              </Card.Footer>
            </Card>
          ))}
        </ul>

        {/* Write Review button */}
        <Button
          as={Link}
          to="/add-review"
          block
          theme="primary"
        >
          Write a Review
        </Button>
      </Container>
    </>
  );
};

export default Reviews;
