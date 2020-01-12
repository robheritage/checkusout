import React from 'react';
import { Switch, Route } from "react-router-dom";

import ReviewContextProvider from './contexts/ReviewContext';

import Layout from './components/Layout'

import Reviews from './pages/Reviews';
import AddReview from './pages/AddReview';

const App = () => (
  <ReviewContextProvider>
    <Layout>
      <Switch>
        <Route path="/" exact component={Reviews} />
        <Route path="/add-review" component={AddReview} />
      </Switch>
    </Layout>
  </ReviewContextProvider>
);

export default App;
