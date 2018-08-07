import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import asyncComponent from './lib/async-component';

import _style from './app.css'; // eslint-disable-line no-unused-vars

const Home = asyncComponent(() => import(/* webpackChunkName: "routes-home" */ './routes/home/index.js'));
const Parrot = asyncComponent(() => import(/* webpackChunkName: "routes-parrot" */ './routes/parrot/index.js'));

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:path" component={Parrot} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
