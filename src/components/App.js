import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Books from './books/Books';
import Categories from './categories/Categories';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Books} />
      <Route path="/categories" exact component={Categories} />
    </Switch>
  </Router>
);

export default App;
