import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReviewContextProvider from './contexts/ReviewContext';

import Layout from './components/Layout'

import Reviews from './pages/Reviews';
import AddReview from './pages/AddReview';

const App = () => (
  <ReviewContextProvider>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Reviews} />
          <Route path="/add-review" component={AddReview} />
        </Switch>
      </Layout>
    </Router>
  </ReviewContextProvider>
);

export default App;
