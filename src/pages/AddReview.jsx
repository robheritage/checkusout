import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import ReactStars from 'react-stars';

// import { ReviewContext } from '../contexts/ReviewContext';

import { Button, Container, Card } from '../components';

const INITIAL_VALUES = {
  name: "",
  email: "",
  title: "",
  rating: 0,
  review: "",
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email"),
  title: Yup.string().required("Please enter a title for your review"),
  rating: Yup.number().required("Please select a rating from 1 to 5")
});

const AddReview = () => {
  return (
    <>
      <Helmet>
        <title>Checkusout.com Reviews | Add Review</title>
      </Helmet>
      <Container>
        <h1 className="u-text-center">Write a Review</h1>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Card as={Form}>
              <Card.Header as="h4" heading="Tell us what you think!" />
              <Card.Content>
                <div className="u-mb-1">
                  <Field
                    name="name"
                    placeholder="Name*"
                    style={{ display: 'block', width: '100%' }}
                  />
                  <ErrorMessage name="name" component="div" className="u-text-danger" />
                </div>
                <div className="u-mb-1">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email*"
                    style={{ display: 'block', width: '100%' }}
                  />
                  <ErrorMessage name="email" component="div" className="u-text-danger" />
                </div>
                <div className="u-mb-1">
                  <Field
                    name="title"
                    placeholder="Title of your review*"
                    style={{ display: 'block', width: '100%' }}
                  />
                  <ErrorMessage name="title" component="div" className="u-text-danger" />
                </div>
                <div className="u-mb-1">
                  <ReactStars
                    size={36}
                    count={5}
                    half={false}
                    value={values.rating}
                    onChange={r => setFieldValue('rating', r, true)}
                  />
                  {/* <Field
                    component={ReactStars}
                    name="rating"
                    size={36}
                    count={5}
                    onChange={(e) => { console.log(e) }}
                  /> */}
                  <ErrorMessage name="rating" component="div" className="u-text-danger" />
                </div>
                <Field
                  name="review"
                  component="textarea"
                  rows={5}
                  placeholder="Review"
                  style={{ display: 'block', width: '100%' }}
                />
              </Card.Content>
              <Card.Footer>
                <Button
                  type="submit"
                  theme="primary"
                  block
                  disabled={isSubmitting}
                >
                  Send it&nbsp;&nbsp;
                  <span style={{ fontSize: '1.25em' }}>&rarr;</span>
                </Button>
              </Card.Footer>
            </Card>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default AddReview;
